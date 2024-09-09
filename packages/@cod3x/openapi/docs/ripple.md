# Ripple

The `Ripple` class from `@cod3x/openapi` provides a convenient way to interact with the Ripple API. This API allows you to perform various operations related to Ripple accounts and transactions.

Here's a detailed documentation for the `Ripple` class:

### Initialization

To use the `Ripple` class, you need to create an instance of it with a configured `HttpClient`. The `HttpClient` is responsible for making HTTP requests to the Ripple API.

Here's an example of how to create an instance of the `Ripple` class:

```javascript
import { HttpClient } from '@cod3x/openapi';
import { Ripple } from '@cod3x/openapi';

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

const ripple = new Ripple(http);
```

### Class: Ripple

#### Methods

**`createRippleAccount(data: RippleInput, params?: RequestParams)`**

This method is used to create a new Ripple account.

* **Parameters:**
  * `data`: An object containing the input data for creating the Ripple account.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the created Ripple account.
*   **Example:**

    ```javascript
    const data = {
      network: 'testnet',
      // Other input data
    };

    try {
      const response = await ripple.createRippleAccount(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`getRippleAccount(accountName: string, params?: RequestParams)`**

This method is used to get the details of a specific Ripple account.

* **Parameters:**
  * `accountName`: The name of the Ripple account.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the specified Ripple account.
*   **Example:**

    ```javascript
    const accountName = 'myRippleAccount';

    try {
      const response = await ripple.getRippleAccount(accountName);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`listRippleAccounts(params?: RequestParams)`**

This method is used to list all Ripple accounts.

* **Parameters:**
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of all Ripple accounts.
*   **Example:**

    ```javascript
    try {
      const response = await ripple.listRippleAccounts();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`signRippleTransaction(accountName: string, data: RippleTransactionInput, params?: RequestParams)`**

This method is used to sign a Ripple transaction for a specific account.

* **Parameters:**
  * `accountName`: The name of the Ripple account.
  * `data`: An object containing the input data for signing the Ripple transaction.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the data of the signed Ripple transaction.
*   **Example:**

    ```javascript
    const accountName = 'myRippleAccount';
    const data = {
      to: 'rBTCAddress',
      value: 10,
      // Other input data
    };

    try {
      const response = await ripple.signRippleTransaction(accountName, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

#### Usage

To use the `Ripple` class, you need to create an instance of it with a configured `HttpClient`. The `HttpClient` is responsible for making HTTP requests to the Ripple API.

You can then use the `ripple` instance to call the various methods of the `Ripple` class. Make sure to handle any potential errors that may occur during the API calls using `try-catch` blocks.
