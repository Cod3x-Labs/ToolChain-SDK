# Erc20

The `Erc20` class from the `@cod3x/openapi` package provides methods to interact with ERC-20 tokens.

### Initialization

To use the `Erc20` class, you need to create an instance of it by passing an instance of the `HttpClient` class to its constructor. The `HttpClient` class is also part of the `@cod3x/openapi` package and provides a convenient way to make HTTP requests.

Here's an example of how to create an instance of the `Erc20` class:

```javascript
import { HttpClient, Erc20 } from '@cod3x/openapi';

const http = new HttpClient({
  baseUrl: 'https://beta.usemoon.ai',
  securityWorker: async (securityData) => {
    return {
      headers: {
        Authorization: `Bearer ${securityData.token}`,
      },
    };
  },
});

const erc20 = new Erc20(http);
```

### Methods

The `Erc20` class provides the following methods:

1.  `allowanceErc20(name: string, data: InputBody, params?: RequestParams): Promise<AllowanceErc20Data>`

    * Retrieves the amount of tokens that an owner has allowed to be spent by a spender.
    * `name` is a string that represents the name of the ERC-20 token.
    * `data` is an object of type `InputBody` that contains the necessary information to make the request.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `AllowanceErc20Data`.

    Example usage:

    ```javascript
    const name = 'my_token';
    const data = {
      owner: 'owner_address',
      spender: 'spender_address',
      contract_address: 'contract_address',
    };
    const result = await erc20.allowanceErc20(name, data);
    console.log(result);
    ```
2.  `approveErc20(name: string, data: InputBody, params?: RequestParams): Promise<ApproveErc20Data>`

    * Approves a spender to spend a certain amount of tokens on behalf of the owner.
    * `name` is a string that represents the name of the ERC-20 token.
    * `data` is an object of type `InputBody` that contains the necessary information to make the request.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `ApproveErc20Data`.

    Example usage:

    ```javascript
    const name = 'my_token';
    const data = {
      spender: 'spender_address',
      amount: '100',
      contract_address: 'contract_address',
    };
    const result = await erc20.approveErc20(name, data);
    console.log(result);
    ```
3.  `balanceOfErc20(name: string, data: InputBody, params?: RequestParams): Promise<BalanceOfErc20Data>`

    * Retrieves the balance of a specific account for a given ERC-20 token.
    * `name` is a string that represents the name of the ERC-20 token.
    * `data` is an object of type `InputBody` that contains the necessary information to make the request.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `BalanceOfErc20Data`.

    Example usage:

    ```javascript
    const name = 'my_token';
    const data = {
      account: 'account_address',
      contract_address: 'contract_address',
    };
    const result = await erc20.balanceOfErc20(name, data);
    console.log(result);
    ```
4.  `decimalsErc20(name: string, data: InputBody, params?: RequestParams): Promise<DecimalsErc20Data>`

    * Retrieves the number of decimals used by a given ERC-20 token.
    * `name` is a string that represents the name of the ERC-20 token.
    * `data` is an object of type `InputBody` that contains the necessary information to make the request.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `DecimalsErc20Data`.

    Example usage:

    ```javascript
    const name = 'my_token';
    const data = {  contract_address: 'contract_address'};
    const result = await erc20.decimalsErc20(name, data);
    console.log(result);
    ```
5.  `nameErc20(name: string, data: InputBody, params?: RequestParams): Promise<NameErc20Data>`

    * Retrieves the name of a given ERC-20 token.
    * `name` is a string that represents the name of the ERC-20 token.
    * `data` is an object of type `InputBody` that contains the necessary information to make the request.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `NameErc20Data`.

    Example usage:

    ```javascript
    const name = 'my_token';
    const data = {  contract_address: 'contract_address' };
    const result = await erc20.nameErc20(name, data);
    console.log(result);
    ```
6.  `symbolErc20(name: string, data: InputBody, params?: RequestParams): Promise<SymbolErc20Data>`

    * Retrieves the symbol of a given ERC-20 token.
    * `name` is a string that represents the name of the ERC-20 token.
    * `data` is an object of type `InputBody` that contains the necessary information to make the request.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `SymbolErc20Data`.

    Example usage:

    ```javascript
    const name = 'my_token';
    const data = {  contract_address: 'contract_address' };
    const result = await erc20.symbolErc20(name, data);
    console.log(result);
    ```
7.  `totalSupplyErc20(name: string, data: InputBody, params?: RequestParams): Promise<TotalSupplyErc20Data>`

    * Retrieves the total supply of a given ERC-20 token.
    * `name` is a string that represents the name of the ERC-20 token.
    * `data` is an object of type `InputBody` that contains the necessary information to make the request.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `TotalSupplyErc20Data`.

    Example usage:

    ```javascript
    const name = 'my_token';
    const data = {  contract_address: 'contract_address',};
    const result = await erc20.totalSupplyErc20(name, data);
    console.log(result);
    ```
8.  `transferErc20(name: string, data: InputBody, params?: RequestParams): Promise<TransferErc20Data>`

    * Transfers a certain amount of tokens from the sender's account to a recipient's account.
    * `name` is a string that represents the name of the ERC-20 token.
    * `data` is an object of type `InputBody` that contains the necessary information to make the request.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `TransferErc20Data`.

    Example usage:

    ```javascript
    const name = 'my_token';
    const data = {
      to: 'recipient_address',
      amount: '100',
      contract_address: 'contract_address',
    };
    const result = await erc20.transferErc20(name, data);
    console.log(result);
    ```
9.  `transferFromErc20(name: string, data: InputBody, params?: RequestParams): Promise<TransferFromErc20Data>`

    * Transfers a certain amount of tokens from a sender's account to a recipient's account on behalf of the sender.
    * `name` is a string that represents the name of the ERC-20 token.
    * `data` is an object of type `InputBody` that contains the necessary information to make the request.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `TransferFromErc20Data`.

    Example usage:

    ```javascript
    const name = 'my_token';
    const data = {
      from: 'sender_address',
      to: 'recipient_address',
      amount: '100',
      contract_address: 'contract_address',

    };
    const result = await erc20.transferFromErc20(name, data);
    console.log(result);
    ```

These methods can be used to perform various operations on ERC-20 tokens, such as checking token balances, approving spenders, transferring tokens, and more. The `Erc20` class is a part of the `@cod3x/openapi` package, which provides a convenient way to interact with the Moon API.
