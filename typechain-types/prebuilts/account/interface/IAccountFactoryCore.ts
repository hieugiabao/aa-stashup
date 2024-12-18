/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface IAccountFactoryCoreInterface extends utils.Interface {
  functions: {
    "accountImplementation()": FunctionFragment;
    "createAccount(address,bytes)": FunctionFragment;
    "getAccountsOfSigner(address)": FunctionFragment;
    "getAddress(address,bytes)": FunctionFragment;
    "getAllAccounts()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accountImplementation"
      | "createAccount"
      | "getAccountsOfSigner"
      | "getAddress"
      | "getAllAccounts"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accountImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountsOfSigner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllAccounts",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "accountImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountsOfSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllAccounts",
    data: BytesLike
  ): Result;

  events: {
    "AccountCreated(address,address)": EventFragment;
    "SignerAdded(address,address)": EventFragment;
    "SignerRemoved(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignerRemoved"): EventFragment;
}

export interface AccountCreatedEventObject {
  account: string;
  accountAdmin: string;
}
export type AccountCreatedEvent = TypedEvent<
  [string, string],
  AccountCreatedEventObject
>;

export type AccountCreatedEventFilter = TypedEventFilter<AccountCreatedEvent>;

export interface SignerAddedEventObject {
  account: string;
  signer: string;
}
export type SignerAddedEvent = TypedEvent<
  [string, string],
  SignerAddedEventObject
>;

export type SignerAddedEventFilter = TypedEventFilter<SignerAddedEvent>;

export interface SignerRemovedEventObject {
  account: string;
  signer: string;
}
export type SignerRemovedEvent = TypedEvent<
  [string, string],
  SignerRemovedEventObject
>;

export type SignerRemovedEventFilter = TypedEventFilter<SignerRemovedEvent>;

export interface IAccountFactoryCore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAccountFactoryCoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accountImplementation(overrides?: CallOverrides): Promise<[string]>;

    createAccount(
      admin: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getAccountsOfSigner(
      signer: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { accounts: string[] }>;

    getAddress(
      adminSigner: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAllAccounts(overrides?: CallOverrides): Promise<[string[]]>;
  };

  accountImplementation(overrides?: CallOverrides): Promise<string>;

  createAccount(
    admin: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getAccountsOfSigner(
    signer: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getAddress(
    adminSigner: string,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getAllAccounts(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    accountImplementation(overrides?: CallOverrides): Promise<string>;

    createAccount(
      admin: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getAccountsOfSigner(
      signer: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getAddress(
      adminSigner: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getAllAccounts(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    "AccountCreated(address,address)"(
      account?: string | null,
      accountAdmin?: string | null
    ): AccountCreatedEventFilter;
    AccountCreated(
      account?: string | null,
      accountAdmin?: string | null
    ): AccountCreatedEventFilter;

    "SignerAdded(address,address)"(
      account?: string | null,
      signer?: string | null
    ): SignerAddedEventFilter;
    SignerAdded(
      account?: string | null,
      signer?: string | null
    ): SignerAddedEventFilter;

    "SignerRemoved(address,address)"(
      account?: string | null,
      signer?: string | null
    ): SignerRemovedEventFilter;
    SignerRemoved(
      account?: string | null,
      signer?: string | null
    ): SignerRemovedEventFilter;
  };

  estimateGas: {
    accountImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    createAccount(
      admin: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getAccountsOfSigner(
      signer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAddress(
      adminSigner: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllAccounts(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAccount(
      admin: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getAccountsOfSigner(
      signer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAddress(
      adminSigner: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllAccounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
