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
  AddTransactionData,
  AddTransactionInput,
  BundleTransactionsData,
  BundleTransactionsInput,
  SendBundledInput,
  SendBundledUserOperationsData,
  SendUserOpInput,
  SendUserOperationData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Userop<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags UserOp
   * @name AddTransaction
   * @request POST:/userop/{accountName}/add-transaction
   * @secure
   */
  addTransaction = (
    accountName: string,
    data: AddTransactionInput,
    params: RequestParams = {}
  ) =>
    this.http.request<AddTransactionData, any>({
      path: `/userop/${accountName}/add-transaction`,
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
   * @tags UserOp
   * @name BundleTransactions
   * @request POST:/userop/{accountName}/bundle-transactions
   * @secure
   */
  bundleTransactions = (
    accountName: string,
    data: BundleTransactionsInput,
    params: RequestParams = {}
  ) =>
    this.http.request<BundleTransactionsData, any>({
      path: `/userop/${accountName}/bundle-transactions`,
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
   * @tags UserOp
   * @name SendBundledUserOperations
   * @request POST:/userop/{accountName}/send-bundled
   * @secure
   */
  sendBundledUserOperations = (
    accountName: string,
    data: SendBundledInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SendBundledUserOperationsData, any>({
      path: `/userop/${accountName}/send-bundled`,
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
   * @tags UserOp
   * @name SendUserOperation
   * @request POST:/userop/{accountName}/send
   * @secure
   */
  sendUserOperation = (
    accountName: string,
    data: SendUserOpInput,
    params: RequestParams = {}
  ) =>
    this.http.request<SendUserOperationData, any>({
      path: `/userop/${accountName}/send`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
