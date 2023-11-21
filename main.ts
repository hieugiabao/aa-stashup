import { ethers } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";
import {
  PaymasterAPI,
  calcPreVerificationGas,
  SimpleAccountAPI,
} from "@account-abstraction/sdk";
import { UserOperationStruct } from "@account-abstraction/contracts";
import { HttpRpcClient } from "@account-abstraction/sdk/dist/src/HttpRpcClient";

const rpcUrl =
  "https://api.stackup.sh/v1/node/75a07307d0f2305dbc37b542400727cb7cf52076e74456acf01c3e121c6aa3da";
const paymasterUrl =
  "https://api.stackup.sh/v1/paymaster/75a07307d0f2305dbc37b542400727cb7cf52076e74456acf01c3e121c6aa3da"; // Optional - you can get one at https://app.stackup.sh/

let accountAPI: SimpleAccountAPI;

// Extend the Ethereum Foundation's account-abstraction/sdk's basic paymaster

class VerifyingPaymasterAPI extends PaymasterAPI {
  private paymasterUrl: string;
  private entryPoint: string;
  constructor(paymasterUrl: string, entryPoint: string) {
    super();
    this.paymasterUrl = paymasterUrl;
    this.entryPoint = entryPoint;
  }

  async getPaymasterAndData(
    userOp: Partial<UserOperationStruct>
  ): Promise<string> {
    // Hack: userOp includes empty paymasterAndData which calcPreVerificationGas requires.
    try {
      // userOp.preVerificationGas contains a promise that will resolve to an error.
      await ethers.utils.resolveProperties(userOp);
      // eslint-disable-next-line no-empty
    } catch (_) {}
    const pmOp: Partial<UserOperationStruct> = {
      sender: userOp.sender,
      nonce: userOp.nonce,
      initCode: userOp.initCode,
      callData: userOp.callData,
      callGasLimit: userOp.callGasLimit,
      verificationGasLimit: userOp.verificationGasLimit,
      maxFeePerGas: userOp.maxFeePerGas,
      maxPriorityFeePerGas: userOp.maxPriorityFeePerGas,
      // A dummy value here is required in order to calculate a correct preVerificationGas value.
      paymasterAndData:
        "0x0101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000001010101010100000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101",
      signature: accountAPI.signUserOpHash(
        await accountAPI.getUserOpHash(userOp as UserOperationStruct)
      ),
    };
    const op = await ethers.utils.resolveProperties(pmOp);
    op.preVerificationGas = calcPreVerificationGas(op);
    op.verificationGasLimit = ethers.BigNumber.from(
      op.verificationGasLimit
    ).mul(3);
    op.paymasterAndData = "0x";
    console.log(op);

    // Ask the paymaster to sign the transaction and return a valid paymasterAndData value.
    const params = [await OptoJSON(op), this.entryPoint, { type: "payg" }];
    const provider = new ethers.providers.JsonRpcProvider(this.paymasterUrl);
    const response = await provider.send("pm_sponsorUserOperation", params);

    return response.data.result.toString();
  }
}

async function OptoJSON(op: Partial<UserOperationStruct>): Promise<any> {
  const userOp = await ethers.utils.resolveProperties(op);
  return Object.keys(userOp)
    .map((key) => {
      let val = (userOp as any)[key];
      if (typeof val !== "string" || !val.startsWith("0x")) {
        val = ethers.utils.hexValue(val);
      }
      return [key, val];
    })
    .reduce(
      (set, [k, v]) => ({
        ...set,
        [k]: v,
      }),
      {}
    );
}

// MAIN FUNCTION
async function main() {
  // Create the paymaster API
  const entryPointAddress = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
  const paymaster = new VerifyingPaymasterAPI(paymasterUrl, entryPointAddress);

  // REMAINDER OF CODE WILL GO HERE
  // Initialize the account
  const provider = new JsonRpcProvider(rpcUrl);
  // const factoryAddress = "0x9406Cc6185a346906296840746125a0E44976454";
  const factoryAddress = "0x733416c6714dBD8caAB4a219213717a13022e586";
  const signingKey =
    "0x4337433743374337433743374337433743374337433743374337433743374337";
  const owner = new ethers.Wallet(signingKey);
  accountAPI = new SimpleAccountAPI({
    provider,
    entryPointAddress,
    owner,
    factoryAddress,
    paymasterAPI: paymaster,
  });

  const address = await accountAPI.getCounterFactualAddress();
  console.log(`Account address: ${address}`);

  // Create the call data
  const to = address; // Receiving address, in this case we will send it to ourselves
  const token = "0x3870419Ba2BBf0127060bCB37f69A1b1C090992B"; // Address of the ERC-20 token
  const value = "0"; // Amount of the ERC-20 token to transfer

  // Read the ERC-20 token contract
  const ERC20_ABI = require("./erc20Abi.json"); // ERC-20 ABI in json format
  const erc20 = new ethers.Contract(token, ERC20_ABI, provider);
  const decimals = await Promise.all([erc20.decimals()]);
  const amount = ethers.utils.parseUnits(value, decimals);

  // Encode the calls
  const callTo = [token, token];
  const callData = [
    erc20.interface.encodeFunctionData("approve", [to, amount]),
    erc20.interface.encodeFunctionData("transfer", [to, amount]),
  ];

  // Build the user operation
  const accountContract = await accountAPI._getAccountContract();
  const fee = await provider.send("eth_maxPriorityFeePerGas", []);
  const block = await provider.getBlock("latest");
  const tip = ethers.BigNumber.from(fee);
  const buffer = tip.div(100).mul(13);
  const maxPriorityFeePerGas = tip.add(buffer);
  const maxFeePerGas = block.baseFeePerGas
    ? block.baseFeePerGas.mul(2).add(maxPriorityFeePerGas)
    : maxPriorityFeePerGas;

  const op = await accountAPI.createSignedUserOp({
    target: address,
    data: accountContract.interface.encodeFunctionData("executeBatch", [
      callTo,
      callData,
    ]),
    ...{ maxFeePerGas, maxPriorityFeePerGas },
  });
  op.preVerificationGas = 54000;

  console.log("Signed User Operation: ");
  console.log(op);

  const op1 = {
    sender: "0xBDdFE3Ef2ff19a34340B951E22CD5145748E8D0F",
    nonce: "0xc",
    initCode: "0x",
    callData:
      "0x18dfb3c7000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000020000000000000000000000003870419ba2bbf0127060bcb37f69a1b1c090992b0000000000000000000000003870419ba2bbf0127060bcb37f69a1b1c090992b0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000044095ea7b3000000000000000000000000a1e194d5dfbfd34027c52d6a697f012fcfe792e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044a9059cbb000000000000000000000000a1e194d5dfbfd34027c52d6a697f012fcfe792e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    callGasLimit: "0x644c",
    verificationGasLimit: "0x13ab5",
    preVerificationGas: "0xd88c",
    maxFeePerGas: "0xa0650d29",
    maxPriorityFeePerGas: "0xa0650d09",
    paymasterAndData:
      "0xe93eca6595fe94091dc1af46aac2a8b5d7990770000000000000000000000000000000000000000000000000000000006551fba1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ddec4c103d4dbf5595f72070151c5abd4900ad8f937834dc5ceb67dc52b9d3e3555abf18f7d5cff9008d5881ade791490184ba879be81356c6055fb51a99a03d1b",
    signature:
      "0x7766ac4d4f1ced0f1e9486ac918823f5e649cd6ebff761dc6699efe07f593c35048661b62fa50cc9d3128524146a9dd57ad5ea73ff5bf42b293a79a46b5a4e141b",
  };

  // Send the user operation
  const chainId = await provider.getNetwork().then((net) => net.chainId);
  const client = new HttpRpcClient(rpcUrl, entryPointAddress, chainId);
  const userOpHash = await client.sendUserOpToBundler(op);

  console.log("Waiting for transaction...");
  const transactionHash = await accountAPI.getUserOpReceipt(userOpHash);
  console.log(`Transaction hash: ${transactionHash}`);
  console.log(`View here: https://jiffyscan.xyz/userOpHash/${userOpHash}`);
}

main().catch((err) => console.error("Error:", err));
