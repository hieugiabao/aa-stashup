/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NonceManager,
  NonceManagerInterface,
} from "../../core/NonceManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint192",
        name: "key",
        type: "uint192",
      },
    ],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint192",
        name: "key",
        type: "uint192",
      },
    ],
    name: "incrementNonce",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint192",
        name: "",
        type: "uint192",
      },
    ],
    name: "nonceSequenceNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610433806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630bd28e3b146100465780631b2e01b81461006257806335567e1a14610092575b600080fd5b610060600480360381019061005b9190610286565b6100c2565b005b61007c60048036038101906100779190610311565b61015e565b604051610089919061036a565b60405180910390f35b6100ac60048036038101906100a79190610311565b610183565b6040516100b9919061036a565b60405180910390f35b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008277ffffffffffffffffffffffffffffffffffffffffffffffff1677ffffffffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610156906103b4565b919050555050565b6000602052816000526040600020602052806000526040600020600091509150505481565b600060408277ffffffffffffffffffffffffffffffffffffffffffffffff16901b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008477ffffffffffffffffffffffffffffffffffffffffffffffff1677ffffffffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205417905092915050565b600080fd5b600077ffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b61026381610236565b811461026e57600080fd5b50565b6000813590506102808161025a565b92915050565b60006020828403121561029c5761029b610231565b5b60006102aa84828501610271565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102de826102b3565b9050919050565b6102ee816102d3565b81146102f957600080fd5b50565b60008135905061030b816102e5565b92915050565b6000806040838503121561032857610327610231565b5b6000610336858286016102fc565b925050602061034785828601610271565b9150509250929050565b6000819050919050565b61036481610351565b82525050565b600060208201905061037f600083018461035b565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006103bf82610351565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156103f2576103f1610385565b5b60018201905091905056fea26469706673582212203df9fe8d9b9d70fc508cfa531e7364e3eec0a5d747547a947913539edba8a03664736f6c634300080c0033";

type NonceManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NonceManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NonceManager__factory extends ContractFactory {
  constructor(...args: NonceManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<NonceManager> {
    return super.deploy(overrides || {}) as Promise<NonceManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NonceManager {
    return super.attach(address) as NonceManager;
  }
  override connect(signer: Signer): NonceManager__factory {
    return super.connect(signer) as NonceManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NonceManagerInterface {
    return new utils.Interface(_abi) as NonceManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NonceManager {
    return new Contract(address, _abi, signerOrProvider) as NonceManager;
  }
}
