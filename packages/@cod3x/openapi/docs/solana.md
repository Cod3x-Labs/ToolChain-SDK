# Solana

The `Solana` class from `@cod3x/openapi` provides a convenient way to interact with the Solana blockchain. This API allows you to perform various operations related to Solana accounts and transactions.

Here's a detailed documentation for the `Solana` class:

### Initialization

To use the `Solana` class, you need to create an instance of it with a configured `HttpClient`. The `HttpClient` is responsible for making HTTP requests to the Solana API.

Here's an example of how to create an instance of the `Solana` class:

```javascript
import { HttpClient } from '@cod3x/openapi';
import { Solana } from '@cod3x/openapi';

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

const solana = new Solana(http);
```

### Class: Solana

#### Methods

**`createSolanaAccount(data: SolanaInput, params?: RequestParams)`**

This method is used to create a new Solana account.

* **Parameters:**
  * `data`: An object containing the input data for creating the Solana account.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the created Solana account.
*   **Example:**

    ```javascript
    const data = {
      network: 'devnet',
      // Other input data
    };

    try {
      const response = await solana.createSolanaAccount(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`getSolanaAccount(accountName: string, params?: RequestParams)`**

This method is used to get the details of a specific Solana account.

* **Parameters:**
  * `accountName`: The name of the Solana account.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the specified Solana account.
*   **Example:**

    ```javascript
    const accountName = 'mySolanaAccount';

    try {
      const response = await solana.getSolanaAccount(accountName);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`listSolanaAccounts(params?: RequestParams)`**

This method is used to list all Solana accounts.

* **Parameters:**
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of all Solana accounts.
*   **Example:**

    ```javascript
    try {
      const response = await solana.listSolanaAccounts();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`multiSignSolanaTransaction(accountName: string, data: SolanaSignTransactionInput, params?: RequestParams)`**

This method is used to multi-sign a Solana transaction for a specific account.

* **Parameters:**
  * `accountName`: The name of the Solana account.
  * `data`: An object containing the input data for multi-signing the Solana transaction.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the multi-signed Solana transaction.
*   **Example:**

    ```javascript
    const accountName = 'mySolanaAccount';
    const data = {
      unsigned_tx: 'base64EncodedTransaction',
      network: 'devnet',
    };

    try {
      const response = await solana.multiSignSolanaTransaction(accountName, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`signSolanaTransaction(accountName: string, data: SolanaSignTransactionInput, params?: RequestParams)`**

This method is used to sign a Solana transaction for a specific account.

* **Parameters:**
  * `accountName`: The name of the Solana account.
  * `data`: An object containing the input data for signing the Solana transaction.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the signed Solana transaction.
*   **Example:**

    ```javascript
    const accountName = 'mySolanaAccount';
    const data = {
      unsigned_tx: 'base64EncodedTransaction',
      network: 'devnet',
    };

    try {
      const response = await solana.signSolanaTransaction(accountName, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`transferSolanaTransaction(accountName: string, data: SolanaTransactionInput, params?: RequestParams)`**

This method is used to transfer SOL from a specific Solana account.

* **Parameters:**
  * `accountName`: The name of the Solana account.
  * `data`: An object containing the input data for the transfer.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the transfer transaction.
*   **Example:**

    ```javascript
    const accountName = 'mySolanaAccount';
    const data = {
      to: 'destinationSolanaAddress',
      value: 1,
      network: 'devnet',
    };

    try {
      const response = await solana.transferSolanaTransaction(accountName, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`transferTokensSignSolanaTransaction(accountName: string, data: SolanaTransactionInput, params?: RequestParams)`**

This method is used to transfer tokens from a specific Solana account.

* **Parameters:**
  * `accountName`: The name of the Solana account.
  * `data`: An object containing the input data for the token transfer.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the token transfer transaction.
*   **Example:**

    ```javascript
    const accountName = 'mySolanaAccount';
    const data = {
      to: 'destinationSolanaAddress',
      value: 1,
      network: 'devnet',
    };

    try {
      const response = await solana.transferTokensSignSolanaTransaction(accountName, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

#### Usage

To use the `Solana` class, you need to create an instance of it with a configured `HttpClient`. The `HttpClient` is responsible for making HTTP requests to the Solana API.

You can then use the `solana` instance to call the various methods of the `Solana` class. Make sure to handle any potential errors that may occur during the API calls using `try-catch` blocks.
