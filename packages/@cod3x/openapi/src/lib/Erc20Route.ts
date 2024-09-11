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
  ApproveData,
  ERC20InputBody,
  GetAllowanceData,
  GetBalanceOfData,
  GetDecimalsData,
  GetNameData,
  GetSymbolData,
  GetTotalSupplyData,
  TransferData,
  TransferFromData,
} from './data-contracts';

export namespace Erc20 {
  /**
   * No description
   * @tags ERC20
   * @name Approve
   * @request POST:/erc20/{address}/approve
   * @secure
   */
  export namespace Approve {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ERC20InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = ApproveData;
  }

  /**
   * No description
   * @tags ERC20
   * @name GetAllowance
   * @request GET:/erc20/{account}/allowance
   * @secure
   */
  export namespace GetAllowance {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
      owner: string;
      spender: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetAllowanceData;
  }

  /**
   * No description
   * @tags ERC20
   * @name GetBalanceOf
   * @request GET:/erc20/{account}/balanceOf
   * @secure
   */
  export namespace GetBalanceOf {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetBalanceOfData;
  }

  /**
   * No description
   * @tags ERC20
   * @name GetDecimals
   * @request GET:/erc20/{account}/decimals
   * @secure
   */
  export namespace GetDecimals {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetDecimalsData;
  }

  /**
   * No description
   * @tags ERC20
   * @name GetName
   * @request GET:/erc20/{account}/name
   * @secure
   */
  export namespace GetName {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetNameData;
  }

  /**
   * No description
   * @tags ERC20
   * @name GetSymbol
   * @request GET:/erc20/{account}/symbol
   * @secure
   */
  export namespace GetSymbol {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetSymbolData;
  }

  /**
   * No description
   * @tags ERC20
   * @name GetTotalSupply
   * @request GET:/erc20/{account}/totalSupply
   * @secure
   */
  export namespace GetTotalSupply {
    export type RequestParams = {
      account: string;
    };
    export type RequestQuery = {
      address: string;
      chainId: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = GetTotalSupplyData;
  }

  /**
   * No description
   * @tags ERC20
   * @name Transfer
   * @request POST:/erc20/{address}/transfer
   * @secure
   */
  export namespace Transfer {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ERC20InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferData;
  }

  /**
   * No description
   * @tags ERC20
   * @name TransferFrom
   * @request POST:/erc20/{address}/transferFrom
   * @secure
   */
  export namespace TransferFrom {
    export type RequestParams = {
      address: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ERC20InputBody;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = TransferFromData;
  }
}
