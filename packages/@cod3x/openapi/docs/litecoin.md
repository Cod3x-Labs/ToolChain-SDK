# Litecoin

The `Litecoin` class from the `@cod3x/openapi` package provides methods to interact with Litecoin accounts and transactions.

### Initialization

To use the `Litecoin` class, you need to create an instance of it by passing an instance of the `HttpClient` class to its constructor. The `HttpClient` class is also part of the `@cod3x/openapi` package and provides a convenient way to make HTTP requests.

Here's an example of how to create an instance of the `Litecoin` class:

```javascript
import { HttpClient, Litecoin } from '@cod3x/openapi';

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

const litecoin = new Litecoin(http);
```

### Methods

The `Litecoin` class provides the following methods:

1.  `createLitecoinAccount(data: LitecoinInput, params?: RequestParams): Promise<CreateLitecoinAccountData>`

    * Creates a new Litecoin account.
    * `data` is an object of type `LitecoinInput` that contains the necessary information to create the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `CreateLitecoinAccountData`.

    Example usage:

    ```javascript
    const data = {
      network: 'testnet',
      private_key: 'private_key',
    };
    const result = await litecoin.createLitecoinAccount(data);
    console.log(result);
    ```
2.  `getLitecoinAccount(accountName: string, params?: RequestParams): Promise<GetLitecoinAccountData>`

    * Retrieves information about a specific Litecoin account.
    * `accountName` is a string that represents the name of the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `GetLitecoinAccountData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const result = await litecoin.getLitecoinAccount(accountName);
    console.log(result);
    ```
3.  `listLitecoinAccounts(params?: RequestParams): Promise<ListLitecoinAccountsData>`

    * Retrieves a list of all Litecoin accounts.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `ListLitecoinAccountsData`.

    Example usage:

    ```javascript
    const result = await litecoin.listLitecoinAccounts();
    console.log(result);
    ```
4.  `signLitecoinTransaction(accountName: string, data: LitecoinTransactionInput, params?: RequestParams): Promise<SignLitecoinTransactionData>`

    * Signs a Litecoin transaction for a specific account.
    * `accountName` is a string that represents the name of the account.
    * `data` is an object of type `LitecoinTransactionInput` that contains the necessary information to sign the transaction.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `SignLitecoinTransactionData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const data = {
      to: 'recipient_address',
      value: 0.1,
    };
    const result = await litecoin.signLitecoinTransaction(accountName, data);
    console.log(result);
    ```

These methods can be used to perform various operations on Litecoin accounts and transactions, such as creating new accounts, retrieving account information, signing transactions, and more. The `Litecoin` class is a part of the `@cod3x/openapi` package, which provides a convenient way to interact with the Moon API.
