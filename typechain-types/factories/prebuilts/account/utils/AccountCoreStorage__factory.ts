/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccountCoreStorage,
  AccountCoreStorageInterface,
} from "../../../../prebuilts/account/utils/AccountCoreStorage";

const _abi = [
  {
    inputs: [],
    name: "ACCOUNT_CORE_STORAGE_POSITION",
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
  "0x60df610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80633246e210146038575b600080fd5b603e6052565b604051604991906090565b60405180910390f35b7f036f52c1827dab135f7fd44ca0bddde297e2f659c710e0ec53e975f22b54830060001b81565b6000819050919050565b608a816079565b82525050565b600060208201905060a360008301846083565b9291505056fea264697066735822122074e284722b57c4e20b883ae001441efa4fd051a02b627ba0df4895c4632375e864736f6c634300080c0033";

type AccountCoreStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountCoreStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccountCoreStorage__factory extends ContractFactory {
  constructor(...args: AccountCoreStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<AccountCoreStorage> {
    return super.deploy(overrides || {}) as Promise<AccountCoreStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AccountCoreStorage {
    return super.attach(address) as AccountCoreStorage;
  }
  override connect(signer: Signer): AccountCoreStorage__factory {
    return super.connect(signer) as AccountCoreStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountCoreStorageInterface {
    return new utils.Interface(_abi) as AccountCoreStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccountCoreStorage {
    return new Contract(address, _abi, signerOrProvider) as AccountCoreStorage;
  }
}
