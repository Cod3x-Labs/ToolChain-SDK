# Tron

The `Tron` class from `@cod3x/openapi` provides a convenient way to interact with the Tron blockchain. This API allows you to perform various operations related to Tron accounts and transactions.

Here's a detailed documentation for the `Tron` class:

### Initialization

To use the `Tron` class, you need to create an instance of it with a configured `HttpClient`. The `HttpClient` is responsible for making HTTP requests to the Tron API.

Here's an example of how to create an instance of the `Tron` class:

```javascript
import { HttpClient } from '@cod3x/openapi';
import { Tron } from '@cod3x/openapi';

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

const tron = new Tron(http);
```

### Class: Tron

#### Methods

**`createTronAccount(data: TronInput, params?: RequestParams)`**

This method is used to create a new Tron account.

* **Parameters:**
  * `data`: An object containing the input data for creating the Tron account.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the created Tron account.
*   **Example:**

    ```javascript
    const data = {
      network: 'mainnet',
      // Other input data
    };

    try {
      const response = await tron.createTronAccount(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`getTronAccount(accountName: string, params?: RequestParams)`**

This method is used to get the details of a specific Tron account.

* **Parameters:**
  * `accountName`: The name of the Tron account.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the specified Tron account.
*   **Example:**

    ```javascript
    const accountName = 'myTronAccount';

    try {
      const response = await tron.getTronAccount(accountName);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`listTronAccounts(params?: RequestParams)`**

This method is used to list all Tron accounts.

* **Parameters:**
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of all Tron accounts.
*   **Example:**

    ```javascript
    try {
      const response = await tron.listTronAccounts();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`signTronTransaction(accountName: string, data: TronTransactionInput, params?: RequestParams)`**

This method is used to sign a Tron transaction for a specific account.

* **Parameters:**
  * `accountName`: The name of the Tron account.
  * `data`: An object containing the input data for signing the Tron transaction.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the signed Tron transaction.
*   **Example:**

    ```javascript
    const accountName = 'myTronAccount';
    const data = {
      to: 'tronAddress',
      value: 10,
      network: 'mainnet',
    };

    try {
      const response = await tron.signTronTransaction(accountName, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

#### Usage

To use the `Tron` class, you need to create an instance of it with a configured `HttpClient`. The `HttpClient` is responsible for making HTTP requests to the Tron API.

You can then use the `tron` instance to call the various methods of the `Tron` class. Make sure to handle any potential errors that may occur during the API calls using `try-catch` blocks.
