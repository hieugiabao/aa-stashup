/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PermissionsEnumerableStorage,
  PermissionsEnumerableStorageInterface,
} from "../../../../extension/upgradeable/PermissionsEnumerable.sol/PermissionsEnumerableStorage";

const _abi = [
  {
    inputs: [],
    name: "PERMISSIONS_ENUMERABLE_STORAGE_POSITION",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101b9610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063871ef69d1461003a575b600080fd5b610042610058565b60405161004f91906100d1565b60405180910390f35b60ff60001b1960017f0c4ba382c0009cf238e4c1ca1a52f51c61e6248a70bdfb34e5ed49d5578a5c0c60001c61008e9190610125565b60405160200161009e9190610168565b604051602081830303815290604052805190602001201681565b6000819050919050565b6100cb816100b8565b82525050565b60006020820190506100e660008301846100c2565b92915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610130826100ec565b915061013b836100ec565b92508282101561014e5761014d6100f6565b5b828203905092915050565b610162816100ec565b82525050565b600060208201905061017d6000830184610159565b9291505056fea264697066735822122073e3ffc9153af202f859f7e23c33c1adef75b156a94a2afde80321eb34dc644664736f6c634300080c0033";

type PermissionsEnumerableStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PermissionsEnumerableStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PermissionsEnumerableStorage__factory extends ContractFactory {
  constructor(...args: PermissionsEnumerableStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<PermissionsEnumerableStorage> {
    return super.deploy(
      overrides || {}
    ) as Promise<PermissionsEnumerableStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PermissionsEnumerableStorage {
    return super.attach(address) as PermissionsEnumerableStorage;
  }
  override connect(signer: Signer): PermissionsEnumerableStorage__factory {
    return super.connect(signer) as PermissionsEnumerableStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PermissionsEnumerableStorageInterface {
    return new utils.Interface(_abi) as PermissionsEnumerableStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PermissionsEnumerableStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PermissionsEnumerableStorage;
  }
}