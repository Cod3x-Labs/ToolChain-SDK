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

export namespace Userop {
  /**
   * No description
   * @tags UserOp
   * @name AddTransaction
   * @request POST:/userop/{accountName}/add-transaction
   * @secure
   */
  export namespace AddTransaction {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = AddTransactionInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = AddTransactionData;
  }

  /**
   * No description
   * @tags UserOp
   * @name BundleTransactions
   * @request POST:/userop/{accountName}/bundle-transactions
   * @secure
   */
  export namespace BundleTransactions {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BundleTransactionsInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = BundleTransactionsData;
  }

  /**
   * No description
   * @tags UserOp
   * @name SendBundledUserOperations
   * @request POST:/userop/{accountName}/send-bundled
   * @secure
   */
  export namespace SendBundledUserOperations {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SendBundledInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SendBundledUserOperationsData;
  }

  /**
   * No description
   * @tags UserOp
   * @name SendUserOperation
   * @request POST:/userop/{accountName}/send
   * @secure
   */
  export namespace SendUserOperation {
    export type RequestParams = {
      accountName: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SendUserOpInput;
    export type RequestHeaders = {
      Authorization: string;
    };
    export type ResponseBody = SendUserOperationData;
  }
}
