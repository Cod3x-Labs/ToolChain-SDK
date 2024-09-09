# Bitcoin Cash

The `Bitcoincash` class from the `@cod3x/openapi` package provides methods to interact with Bitcoin Cash accounts and transactions.

### Initialization

To use the `Bitcoincash` class, you need to create an instance of it by passing an instance of the `HttpClient` class to its constructor. The `HttpClient` class is also part of the `@cod3x/openapi` package and provides a convenient way to make HTTP requests.

Here's an example of how to create an instance of the `Bitcoincash` class:

```javascript
import { HttpClient, Bitcoincash } from '@cod3x/openapi';

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

const bitcoincash = new Bitcoincash(http);
```

### Methods

The `Bitcoincash` class provides the following methods:

1.  `createBitcoinCashAccount(data: BitcoinCashInput, params?: RequestParams): Promise<CreateBitcoinCashAccountData>`

    * Creates a new Bitcoin Cash account.
    * `data` is an object of type `BitcoinCashInput` that contains the necessary information to create the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `CreateBitcoinCashAccountData`.

    Example usage:

    ```javascript
    const data = {
      network: 'testnet',
      private_key: 'private_key',
    };
    const result = await bitcoincash.createBitcoinCashAccount(data);
    console.log(result);
    ```
2.  `getBitcoinCashAccount(accountName: string, params?: RequestParams): Promise<GetBitcoinCashAccountData>`

    * Retrieves information about a specific Bitcoin Cash account.
    * `accountName` is a string that represents the name of the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `GetBitcoinCashAccountData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const result = await bitcoincash.getBitcoinCashAccount(accountName);
    console.log(result);
    ```
3.  `listBitcoinCashAccounts(params?: RequestParams): Promise<ListBitcoinCashAccountsData>`

    * Retrieves a list of all Bitcoin Cash accounts.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `ListBitcoinCashAccountsData`.

    Example usage:

    ```javascript
    const result = await bitcoincash.listBitcoinCashAccounts();
    console.log(result);
    ```
4.  `signBitcoinCashTransaction(accountName: string, data: BitcoinCashTransactionInput, params?: RequestParams): Promise<SignBitcoinCashTransactionData>`

    * Signs a Bitcoin Cash transaction for a specific account.
    * `accountName` is a string that represents the name of the account.
    * `data` is an object of type `BitcoinCashTransactionInput` that contains the necessary information to sign the transaction.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `SignBitcoinCashTransactionData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const data = {
      to: 'recipient_address',
      value: 0.1,
    };
    const result = await bitcoincash.signBitcoinCashTransaction(accountName, data);
    console.log(result);
    ```

These methods can be used to perform various operations on Bitcoin Cash accounts and transactions, such as creating new accounts, retrieving account information, signing transactions, and more. The `Bitcoincash` class is a part of the `@cod3x/openapi` package, which provides a convenient way to interact with the Moon API.
