/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAccountPermissions,
  IAccountPermissionsInterface,
} from "../../../extension/interface/IAccountPermissions";

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

export class IAccountPermissions__factory {
  static readonly abi = _abi;
  static createInterface(): IAccountPermissionsInterface {
    return new utils.Interface(_abi) as IAccountPermissionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAccountPermissions {
    return new Contract(address, _abi, signerOrProvider) as IAccountPermissions;
  }
}
