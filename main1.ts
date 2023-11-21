// Welcome to the ERC-4337 tutorial #1!
// This tutorial walks you though a simple ERC-4337 transaction: sending a User Operation
// with gas paid by a Paymaster.
//
// You can view more information about this tutorial at
// https://docs.stackup.sh/docs/get-started-with-stackup
//
// Enter `npm run dev` into your terminal to run.

// This example uses the userop.js library to build the transaction, but you can use any
// library.

import { ethers } from "ethers";
import { Presets, Client } from "userop";
import { SimpleAccount } from "userop/dist/preset/builder";
import { SimpleAccount__factory } from "userop/dist/typechain";

const rpcUrl =
  "https://api.stackup.sh/v1/node/75a07307d0f2305dbc37b542400727cb7cf52076e74456acf01c3e121c6aa3da";
const paymasterUrl =
  "https://api.stackup.sh/v1/paymaster/75a07307d0f2305dbc37b542400727cb7cf52076e74456acf01c3e121c6aa3da"; // Optional - you can get one at https://app.stackup.sh/

async function main() {
  const paymasterContext = { type: "payg" };
  const paymasterMiddleware = Presets.Middleware.verifyingPaymaster(
    paymasterUrl,
    paymasterContext
  );
  const opts =
    paymasterUrl.toString() === ""
      ? {}
      : {
          paymasterMiddleware: paymasterMiddleware,
        };

  // Initialize the account
  const signingKey =
    "0x77a68076e9b1798ab4da29602598205a184d25e0cccdca62bcece1b7cecbfab9";
  const signer = new ethers.Wallet(signingKey);
  const builder = await Presets.Builder.SimpleAccount.init(signer, rpcUrl, {
    ...opts,
    // factory: "0x733416c6714dBD8caAB4a219213717a13022e586",
  });
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const account = SimpleAccount__factory.connect(
    "0xa1e194d5DfBfD34027C52d6a697F012fCFe792e0",
    provider
  );
  builder.proxy = account;
  builder.setSender(account.address);
  console.log(`Account address: ${account.address}`);

  // Create the call data
  const to = "0xa1e194d5DfBfD34027C52d6a697F012fCFe792e0"; // Receiving address, in this case we will send it to ourselves
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

  // Send the User Operation to the ERC-4337 mempool
  const client = await Client.init(rpcUrl);
  const res = await client.sendUserOperation(
    builder.executeBatch(callTo, callData),
    {
      onBuild: (op) => console.log("Signed UserOperation:", op),
    }
  );
  // Return receipt
  console.log(`UserOpHash: ${res.userOpHash}`);
  console.log("Waiting for transaction...");
  const ev = await res.wait();

  console.log(`Transaction hash: ${ev?.transactionHash ?? null}`);
  console.log(`View here: https://jiffyscan.xyz/userOpHash/${res.userOpHash}`);
}

main().catch((err) => console.error("Error:", err));
