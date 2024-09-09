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
  GetAssetParams,
  GetConvertToAssetsData,
  GetConvertToAssetsParams,
  GetConvertToSharesData,
  GetConvertToSharesParams,
  GetMaxDepositData,
  GetMaxDepositParams,
  GetMaxMintData,
  GetMaxMintParams,
  GetMaxRedeemData,
  GetMaxRedeemParams,
  GetMaxWithdrawData,
  GetMaxWithdrawParams,
  GetTotalAssetsData,
  GetTotalAssetsParams,
  InputBody,
  MintData,
  RedeemData,
  WithdrawData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc4626<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ERC4626
   * @name Deposit
   * @request POST:/erc4626/{address}/deposit
   * @secure
   */
  deposit = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<DepositData, any>({
      path: `/erc4626/${address}/deposit`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetAsset
   * @request GET:/erc4626/{address}/asset
   * @secure
   */
  getAsset = (
    { address, ...query }: GetAssetParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAssetData, any>({
      path: `/erc4626/${address}/asset`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetConvertToAssets
   * @request GET:/erc4626/{address}/convertToAssets
   * @secure
   */
  getConvertToAssets = (
    { address, ...query }: GetConvertToAssetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetConvertToAssetsData, any>({
      path: `/erc4626/${address}/convertToAssets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetConvertToShares
   * @request GET:/erc4626/{address}/convertToShares
   * @secure
   */
  getConvertToShares = (
    { address, ...query }: GetConvertToSharesParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetConvertToSharesData, any>({
      path: `/erc4626/${address}/convertToShares`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetMaxDeposit
   * @request GET:/erc4626/{address}/maxDeposit
   * @secure
   */
  getMaxDeposit = (
    { address, ...query }: GetMaxDepositParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMaxDepositData, any>({
      path: `/erc4626/${address}/maxDeposit`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetMaxMint
   * @request GET:/erc4626/{address}/maxMint
   * @secure
   */
  getMaxMint = (
    { address, ...query }: GetMaxMintParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMaxMintData, any>({
      path: `/erc4626/${address}/maxMint`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetMaxRedeem
   * @request GET:/erc4626/{address}/maxRedeem
   * @secure
   */
  getMaxRedeem = (
    { address, ...query }: GetMaxRedeemParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMaxRedeemData, any>({
      path: `/erc4626/${address}/maxRedeem`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetMaxWithdraw
   * @request GET:/erc4626/{address}/maxWithdraw
   * @secure
   */
  getMaxWithdraw = (
    { address, ...query }: GetMaxWithdrawParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetMaxWithdrawData, any>({
      path: `/erc4626/${address}/maxWithdraw`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name GetTotalAssets
   * @request GET:/erc4626/{address}/totalAssets
   * @secure
   */
  getTotalAssets = (
    { address, ...query }: GetTotalAssetsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTotalAssetsData, any>({
      path: `/erc4626/${address}/totalAssets`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name Mint
   * @request POST:/erc4626/{address}/mint
   * @secure
   */
  mint = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<MintData, any>({
      path: `/erc4626/${address}/mint`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name Redeem
   * @request POST:/erc4626/{address}/redeem
   * @secure
   */
  redeem = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<RedeemData, any>({
      path: `/erc4626/${address}/redeem`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC4626
   * @name Withdraw
   * @request POST:/erc4626/{address}/withdraw
   * @secure
   */
  withdraw = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<WithdrawData, any>({
      path: `/erc4626/${address}/withdraw`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
