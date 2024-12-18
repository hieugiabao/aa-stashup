/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface AccountPermissionsStorageInterface extends utils.Interface {
  functions: {
    "ACCOUNT_PERMISSIONS_STORAGE_POSITION()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "ACCOUNT_PERMISSIONS_STORAGE_POSITION"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ACCOUNT_PERMISSIONS_STORAGE_POSITION",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "ACCOUNT_PERMISSIONS_STORAGE_POSITION",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AccountPermissionsStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountPermissionsStorageInterface;

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
    ACCOUNT_PERMISSIONS_STORAGE_POSITION(
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  ACCOUNT_PERMISSIONS_STORAGE_POSITION(
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    ACCOUNT_PERMISSIONS_STORAGE_POSITION(
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ACCOUNT_PERMISSIONS_STORAGE_POSITION(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ACCOUNT_PERMISSIONS_STORAGE_POSITION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
