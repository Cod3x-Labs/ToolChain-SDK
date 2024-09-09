# EOS



The `Eos` class from the `@cod3x/openapi` package provides methods to interact with EOS accounts and transactions.

### Initialization

To use the `Eos` class, you need to create an instance of it by passing an instance of the `HttpClient` class to its constructor. The `HttpClient` class is also part of the `@cod3x/openapi` package and provides a convenient way to make HTTP requests.

Here's an example of how to create an instance of the `Eos` class:

```javascript
import { HttpClient, Eos } from '@cod3x/openapi';

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

const eos = new Eos(http);
```

### Methods

The `Eos` class provides the following methods:

1.  `createEosAccount(data: EosInput, params?: RequestParams): Promise<CreateEosAccountData>`

    * Creates a new EOS account.
    * `data` is an object of type `EosInput` that contains the necessary information to create the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `CreateEosAccountData`.

    Example usage:

    ```javascript
    const data = {
      network: 'testnet',
      private_key: 'private_key',
    };
    const result = await eos.createEosAccount(data);
    console.log(result);
    ```
2.  `getEosAccount(accountName: string, params?: RequestParams): Promise<GetEosAccountData>`

    * Retrieves information about a specific EOS account.
    * `accountName` is a string that represents the name of the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `GetEosAccountData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const result = await eos.getEosAccount(accountName);
    console.log(result);
    ```
3.  `listEosAccounts(params?: RequestParams): Promise<ListEosAccountsData>`

    * Retrieves a list of all EOS accounts.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `ListEosAccountsData`.

    Example usage:

    ```javascript
    const result = await eos.listEosAccounts();
    console.log(result);
    ```
4.  `signEosTransaction(accountName: string, data: EosTransactionInput, params?: RequestParams): Promise<SignEosTransactionData>`

    * Signs an EOS transaction for a specific account.
    * `accountName` is a string that represents the name of the account.
    * `data` is an object of type `EosTransactionInput` that contains the necessary information to sign the transaction.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `SignEosTransactionData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const data = {
      to: 'recipient_address',
      value: 0.1,
    };
    const result = await eos.signEosTransaction(accountName, data);
    console.log(result);
    ```

These methods can be used to perform various operations on EOS accounts and transactions, such as creating new accounts, retrieving account information, signing transactions, and more. The `Eos` class is a part of the `@cod3x/openapi` package, which provides a convenient way to interact with the Moon API.
