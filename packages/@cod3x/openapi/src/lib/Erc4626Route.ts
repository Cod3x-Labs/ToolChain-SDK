/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  DepositData,
  GetAssetData,
  GetConvertToAssetsData,
  GetConvertToSharesData,
  GetMaxDepositData,
  GetMaxMintData,
  GetMaxRedeemData,
  GetMaxWithdrawData,
  GetTotalAssetsData,
  InputBody,
  MintData,
  RedeemData,
  WithdrawData,
} from './data-contracts';

export namespace Erc4626 {
  /**
   * No description
   * @tags ERC4626
   * @name Deposit
   * @request POST:/erc4626/{address}/deposit
   * @secure
   */
  export namespace Deposit {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = DepositData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetAsset
   * @request GET:/erc4626/{address}/asset
   * @secure
   */
  export namespace GetAsset {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAssetData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetConvertToAssets
   * @request GET:/erc4626/{address}/convertToAssets
   * @secure
   */
  export namespace GetConvertToAssets {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chainId: string;
      shares: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetConvertToAssetsData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetConvertToShares
   * @request GET:/erc4626/{address}/convertToShares
   * @secure
   */
  export namespace GetConvertToShares {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      assets: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetConvertToSharesData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetMaxDeposit
   * @request GET:/erc4626/{address}/maxDeposit
   * @secure
   */
  export namespace GetMaxDeposit {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chainId: string;
      receiver: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMaxDepositData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetMaxMint
   * @request GET:/erc4626/{address}/maxMint
   * @secure
   */
  export namespace GetMaxMint {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chainId: string;
      receiver: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMaxMintData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetMaxRedeem
   * @request GET:/erc4626/{address}/maxRedeem
   * @secure
   */
  export namespace GetMaxRedeem {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chainId: string;
      owner: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMaxRedeemData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetMaxWithdraw
   * @request GET:/erc4626/{address}/maxWithdraw
   * @secure
   */
  export namespace GetMaxWithdraw {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chainId: string;
      owner: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetMaxWithdrawData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name GetTotalAssets
   * @request GET:/erc4626/{address}/totalAssets
   * @secure
   */
  export namespace GetTotalAssets {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTotalAssetsData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name Mint
   * @request POST:/erc4626/{address}/mint
   * @secure
   */
  export namespace Mint {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = MintData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name Redeem
   * @request POST:/erc4626/{address}/redeem
   * @secure
   */
  export namespace Redeem {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = RedeemData;
  }

  /**
   * No description
   * @tags ERC4626
   * @name Withdraw
   * @request POST:/erc4626/{address}/withdraw
   * @secure
   */
  export namespace Withdraw {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = WithdrawData;
  }
}
