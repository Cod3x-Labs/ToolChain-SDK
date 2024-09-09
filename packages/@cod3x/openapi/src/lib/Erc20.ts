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
  GetAllowanceData,
  GetAllowanceParams,
  GetBalanceOfData,
  GetBalanceOfParams,
  GetDecimalsData,
  GetDecimalsParams,
  GetNameData,
  GetNameParams,
  GetSymbolData,
  GetSymbolParams,
  GetTotalSupplyData,
  GetTotalSupplyParams,
  InputBody,
  TransferData,
  TransferFromData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Erc20<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ERC20
   * @name Approve
   * @request POST:/erc20/{address}/approve
   * @secure
   */
  approve = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<ApproveData, any>({
      path: `/erc20/${address}/approve`,
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
   * @tags ERC20
   * @name GetAllowance
   * @request GET:/erc20/{address}/allowance
   * @secure
   */
  getAllowance = (
    { address, ...query }: GetAllowanceParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetAllowanceData, any>({
      path: `/erc20/${address}/allowance`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name GetBalanceOf
   * @request GET:/erc20/{address}/balanceOf
   * @secure
   */
  getBalanceOf = (
    { address, ...query }: GetBalanceOfParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetBalanceOfData, any>({
      path: `/erc20/${address}/balanceOf`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name GetDecimals
   * @request GET:/erc20/{address}/decimals
   * @secure
   */
  getDecimals = (
    { address, ...query }: GetDecimalsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetDecimalsData, any>({
      path: `/erc20/${address}/decimals`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name GetName
   * @request GET:/erc20/{address}/name
   * @secure
   */
  getName = (
    { address, ...query }: GetNameParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetNameData, any>({
      path: `/erc20/${address}/name`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name GetSymbol
   * @request GET:/erc20/{address}/symbol
   * @secure
   */
  getSymbol = (
    { address, ...query }: GetSymbolParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetSymbolData, any>({
      path: `/erc20/${address}/symbol`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name GetTotalSupply
   * @request GET:/erc20/{address}/totalSupply
   * @secure
   */
  getTotalSupply = (
    { address, ...query }: GetTotalSupplyParams,
    params: RequestParams = {}
  ) =>
    this.http.request<GetTotalSupplyData, any>({
      path: `/erc20/${address}/totalSupply`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags ERC20
   * @name Transfer
   * @request POST:/erc20/{address}/transfer
   * @secure
   */
  transfer = (address: string, data: InputBody, params: RequestParams = {}) =>
    this.http.request<TransferData, any>({
      path: `/erc20/${address}/transfer`,
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
   * @tags ERC20
   * @name TransferFrom
   * @request POST:/erc20/{address}/transferFrom
   * @secure
   */
  transferFrom = (
    address: string,
    data: InputBody,
    params: RequestParams = {}
  ) =>
    this.http.request<TransferFromData, any>({
      path: `/erc20/${address}/transferFrom`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
