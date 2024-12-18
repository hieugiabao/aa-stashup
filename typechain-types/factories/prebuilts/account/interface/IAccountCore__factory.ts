/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAccountCore,
  IAccountCoreInterface,
} from "../../../../prebuilts/account/interface/IAccountCore";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAdmin",
        type: "bool",
      },
    ],
    name: "AdminUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authorizingSigner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "targetSigner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "isAdmin",
            type: "uint8",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "permissionStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "permissionEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct IAccountPermissions.SignerPermissionRequest",
        name: "permissions",
        type: "tuple",
      },
    ],
    name: "SignerPermissionsUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllActiveSigners",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "startTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "endTimestamp",
            type: "uint128",
          },
        ],
        internalType: "struct IAccountPermissions.SignerPermissions[]",
        name: "signers",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllAdmins",
    outputs: [
      {
        internalType: "address[]",
        name: "admins",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllSigners",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "startTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "endTimestamp",
            type: "uint128",
          },
        ],
        internalType: "struct IAccountPermissions.SignerPermissions[]",
        name: "signers",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "getPermissionsForSigner",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "startTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "endTimestamp",
            type: "uint128",
          },
        ],
        internalType: "struct IAccountPermissions.SignerPermissions",
        name: "permissions",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "isActiveSigner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "isAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "isAdmin",
            type: "uint8",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "permissionStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "permissionEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
        ],
        internalType: "struct IAccountPermissions.SignerPermissionRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "setPermissionsForSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "isAdmin",
            type: "uint8",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "permissionStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "permissionEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
        ],
        internalType: "struct IAccountPermissions.SignerPermissionRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verifySignerPermissionRequest",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IAccountCore__factory {
  static readonly abi = _abi;
  static createInterface(): IAccountCoreInterface {
    return new utils.Interface(_abi) as IAccountCoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAccountCore {
    return new Contract(address, _abi, signerOrProvider) as IAccountCore;
  }
}
