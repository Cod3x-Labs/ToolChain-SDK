# Cosmos

The `Cosmos` class from the `@cod3x/openapi` package provides methods to interact with Cosmos accounts and transactions.

### Initialization

To use the `Cosmos` class, you need to create an instance of it by passing an instance of the `HttpClient` class to its constructor. The `HttpClient` class is also part of the `@cod3x/openapi` package and provides a convenient way to make HTTP requests.

Here's an example of how to create an instance of the `Cosmos` class:

```javascript
import { HttpClient, Cosmos } from '@cod3x/openapi';

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

const cosmos = new Cosmos(http);
```

### Methods

The `Cosmos` class provides the following methods:

1.  `createCosmosAccount(data: CosmosInput, params?: RequestParams): Promise<CreateCosmosAccountData>`

    * Creates a new Cosmos account.
    * `data` is an object of type `CosmosInput` that contains the necessary information to create the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `CreateCosmosAccountData`.

    Example usage:

    ```javascript
    const data = {
      name: 'my_account',
      network: 'testnet',
      private_key: 'private_key',
    };
    const result = await cosmos.createCosmosAccount(data);
    console.log(result);
    ```
2.  `getCosmosAccount(accountName: string, params?: RequestParams): Promise<GetCosmosAccountData>`

    * Retrieves information about a specific Cosmos account.
    * `accountName` is a string that represents the name of the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `GetCosmosAccountData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const result = await cosmos.getCosmosAccount(accountName);
    console.log(result);
    ```
3.  `listCosmosAccounts(params?: RequestParams): Promise<ListCosmosAccountsData>`

    * Retrieves a list of all Cosmos accounts.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `ListCosmosAccountsData`.

    Example usage:

    ```javascript
    const result = await cosmos.listCosmosAccounts();
    console.log(result);
    ```
4.  `signCosmosTransaction(accountName: string, data: CosmosTransactionInput, params?: RequestParams): Promise<SignCosmosTransactionData>`

    * Signs a Cosmos transaction for a specific account.
    * `accountName` is a string that represents the name of the account.
    * `data` is an object of type `CosmosTransactionInput` that contains the necessary information to sign the transaction.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `SignCosmosTransactionData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const data = {
      to: 'recipient_address',
      value: 0.1,
    };
    const result = await cosmos.signCosmosTransaction(accountName, data);
    console.log(result);
    ```

These methods can be used to perform various operations on Cosmos accounts and transactions, such as creating new accounts, retrieving account information, signing transactions, and more. The `Cosmos` class is a part of the `@cod3x/openapi` package, which provides a convenient way to interact with the Moon API.
