# Dogecoin

The `Dogecoin` class from the `@cod3x/openapi` package provides methods to interact with Dogecoin accounts and transactions.

### Initialization

To use the `Dogecoin` class, you need to create an instance of it by passing an instance of the `HttpClient` class to its constructor. The `HttpClient` class is also part of the `@cod3x/openapi` package and provides a convenient way to make HTTP requests.

Here's an example of how to create an instance of the `Dogecoin` class:

```javascript
import { HttpClient, Dogecoin } from '@cod3x/openapi';

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

const dogecoin = new Dogecoin(http);
```

### Methods

The `Dogecoin` class provides the following methods:

1.  `createDogeCoinAccount(data: DogeCoinInput, params?: RequestParams): Promise<CreateDogeCoinAccountData>`

    * Creates a new Dogecoin account.
    * `data` is an object of type `DogeCoinInput` that contains the necessary information to create the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `CreateDogeCoinAccountData`.

    Example usage:

    ```javascript
    const data = {
      network: 'testnet',
      private_key: 'private_key',
    };
    const result = await dogecoin.createDogeCoinAccount(data);
    console.log(result);
    ```
2.  `getDogeCoinAccount(accountName: string, params?: RequestParams): Promise<GetDogeCoinAccountData>`

    * Retrieves information about a specific Dogecoin account.
    * `accountName` is a string that represents the name of the account.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `GetDogeCoinAccountData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const result = await dogecoin.getDogeCoinAccount(accountName);
    console.log(result);
    ```
3.  `listDogeCoinAccounts(params?: RequestParams): Promise<ListDogeCoinAccountsData>`

    * Retrieves a list of all Dogecoin accounts.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `ListDogeCoinAccountsData`.

    Example usage:

    ```javascript
    const result = await dogecoin.listDogeCoinAccounts();
    console.log(result);
    ```
4.  `signDogeCoinTransaction(accountName: string, data: DogeCoinTransactionInput, params?: RequestParams): Promise<SignDogeCoinTransactionData>`

    * Signs a Dogecoin transaction for a specific account.
    * `accountName` is a string that represents the name of the account.
    * `data` is an object of type `DogeCoinTransactionInput` that contains the necessary information to sign the transaction.
    * `params` is an optional object of type `RequestParams` that can be used to customize the request.
    * Returns a promise that resolves to an object of type `SignDogeCoinTransactionData`.

    Example usage:

    ```javascript
    const accountName = 'my_account';
    const data = {
      to: 'recipient_address',
      value: 0.1,
    };
    const result = await dogecoin.signDogeCoinTransaction(accountName, data);
    console.log(result);
    ```

These methods can be used to perform various operations on Dogecoin accounts and transactions, such as creating new accounts, retrieving account information, signing transactions, and more. The `Dogecoin` class is a part of the `@cod3x/openapi` package, which provides a convenient way to interact with the Moon API.
