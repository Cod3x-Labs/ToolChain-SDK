# Bitcoin

The `Bitcoin` class from the `@cod3x/openapi` package provides methods to interact with Bitcoin accounts and transactions.

### Initialization

To use the `Bitcoin` class, you need to create an instance of it by passing an instance of the `HttpClient` class to its constructor. The `HttpClient` class is also part of the `@cod3x/openapi` package and provides a convenient way to make HTTP requests.

Here's an example of how to create an instance of the `Bitcoin` class:

```javascript
import { HttpClient, Bitcoin } from '@cod3x/openapi';

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

const bitcoin = new Bitcoin(http);
```

### Methods

The `Bitcoin` class provides the following methods:

1.  `createBitcoinAccount(data: BitcoinInput, params?: RequestParams): Promise<CreateBitcoinAccountData>`

    * Creates a new Bitcoin account.
    * `data` is an object of type `BitcoinInput` that contains the necessary information to create the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `CreateBitcoinAccountData`.

    Example usage:

    ```javascript
    const data = {
      name: 'my_account',
      network: 'testnet',
    };
    const result = await bitcoin.createBitcoinAccount(data);
    console.log(result);
    ```
2.  `getBitcoinAccount(accountName: string, params?: RequestParams): Promise<GetBitcoinAccountData>`

    * Retrieves information about a specific Bitcoin account.
    * `accountName` is a string that represents the name of the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `GetBitcoinAccountData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const result = await bitcoin.getBitcoinAccount(accountName);
    console.log(result);
    ```
3.  `listBitcoinAccounts(params?: RequestParams): Promise<ListBitcoinAccountsData>`

    * Retrieves a list of all Bitcoin accounts.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `ListBitcoinAccountsData`.

    Example usage:

    ```javascript
    const result = await bitcoin.listBitcoinAccounts();
    console.log(result);
    ```
4.  `signBitcoinTransaction(accountName: string, data: BitcoinTransactionInput, params?: RequestParams): Promise<SignBitcoinTransactionData>`

    * Signs a Bitcoin transaction for a specific account.
    * `accountName` is a string that represents the name of the account.
    * `data` is an object of type `BitcoinTransactionInput` that contains the necessary information to sign the transaction.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `SignBitcoinTransactionData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const data = {
      to: 'recipient_address',
      value: 0.1,
    };
    const result = await bitcoin.signBitcoinTransaction(accountName, data);
    console.log(result);
    ```

These methods can be used to perform various operations on Bitcoin accounts and transactions, such as creating new accounts, retrieving account information, signing transactions, and more. The `Bitcoin` class is a part of the `@cod3x/openapi` package, which provides a convenient way to interact with the Moon API.
