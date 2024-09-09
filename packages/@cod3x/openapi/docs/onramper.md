# OnRamper

The `OnRamper` class from `@cod3x/moon-api` provides a convenient way to interact with the `OnRamper` API. This API allows you to perform various operations related to cryptocurrency purchases and sales, as well as retrieving supported assets, currencies, and payment types.

Here's a detailed documentation for the `OnRamper` class:

### Initialization

To use the `OnRamper` class, you need to create an instance of it with a configured `HttpClient`. The `HttpClient` is responsible for making HTTP requests to the Onramper API.

Here's an example of how to create an instance of the `OnRamper` class:

```javascript
import { HttpClient } from '@cod3x/moon-api';
import { Onramper } from '@cod3x/moon-api';

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

const onramper = new OnRamper(http);
```

### Class: OnRamper

#### Methods

**`onRamperCheckout(accountName: string, data: TransactionInput, params?: RequestParams)`**

This method is used to initiate a cryptocurrency purchase for a specific account.

* **Parameters:**
  * `accountName`: The name of the account to fund.
  * `data`: An object containing the transaction input details.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the checkout data.
*   **Example:**

    ```javascript
    const accountName = 'myAccount';
    const data = {
      // Transaction input details
    };

    try {
      const response = await onramper.onRamperCheckout(accountName, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetQuotesBuy(query: OnRamperGetQuotesBuyParams, params?: RequestParams)`**

This method is used to get quotes for buying cryptocurrency.

* **Parameters:**
  * `query`: An object containing the parameters for the quote request.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the quotes for buying cryptocurrency.
*   **Example:**

    ```javascript
    const query = {
      amount: 100,
      crypto: 'BTC',
      fiat: 'USD',
      // Other parameters
    };

    try {
      const response = await onramper.onRamperGetQuotesBuy(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetQuotesSell(query: OnRamperGetQuotesSellParams, params?: RequestParams)`**

This method is used to get quotes for selling cryptocurrency.

* **Parameters:**
  * `query`: An object containing the parameters for the quote request.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the quotes for selling cryptocurrency.
*   **Example:**

    ```javascript
    const query = {
      amount: 1,
      crypto: 'BTC',
      fiat: 'USD',
      // Other parameters
    };

    try {
      const response = await onramper.onRamperGetQuotesSell(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedAssets(query: OnRamperGetSupportedAssetsParams, params?: RequestParams)`**

This method is used to get the supported assets for a specific country and source.

* **Parameters:**
  * `query`: An object containing the country and source.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the supported assets.
*   **Example:**

    ```javascript
    const query = {
      country: 'US',
      source: 'buy',
    };

    try {
      const response = await onramper.onRamperGetSupportedAssets(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedCurrencies(query: OnRamperGetSupportedCurrenciesParams, params?: RequestParams)`**

This method is used to get the supported currencies for a specific type.

* **Parameters:**
  * `query`: An object containing the type.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the supported currencies.
*   **Example:**

    ```javascript
    const query = {
      type: 'fiat',
    };

    try {
      const response = await onramper.onRamperGetSupportedCurrencies(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedDefaultsAll(query: OnRamperGetSupportedDefaultsAllParams, params?: RequestParams)`**

This method is used to get the supported defaults for a specific country and type.

* **Parameters:**
  * `query`: An object containing the country and type.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the supported defaults.
*   **Example:**

    ```javascript
    const query = {
      country: 'US',
      type: 'buy',
    };

    try {
      const response = await onramper.onRamperGetSupportedDefaultsAll(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedOnRampsAll(params?: RequestParams)`**

This method is used to get all supported on-ramps.

* **Parameters:**
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to all supported on-ramps.
*   **Example:**

    ```javascript
    try {
      const response = await onramper.onRamperGetSupportedOnRampsAll();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedPaymentTypes(query: OnRamperGetSupportedPaymentTypesParams, params?: RequestParams)`**

This method is used to get the supported payment types for a specific country, fiat, and type.

* **Parameters:**
  * `query`: An object containing the country, fiat, and type.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the supported payment types.
*   **Example:**

    ```javascript
    const query = {
      country: 'US',
      fiat: 'USD',
      type: 'buy',
    };

    try {
      const response = await onramper.onRamperGetSupportedPaymentTypes(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedPaymentTypesFiat(query: OnRamperGetSupportedPaymentTypesFiatParams, params?: RequestParams)`**

This method is used to get the supported payment types for a specific country and fiat.

* **Parameters:**
  * `query`: An object containing the country and fiat.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the supported payment types.
*   **Example:**

    ```javascript
    const query = {
      country: 'US',
      fiat: 'USD',
    };

    try {
      const response = await onramper.onRamperGetSupportedPaymentTypesFiat(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

#### Usage

To use the `Onramper` class, you need to create an instance of it with a configured `HttpClient`. The `HttpClient` is responsible for making HTTP requests to the Onramper API.

You can then use the `onramper` instance to call the various methods of the `Onramper` class. Make sure to handle any potential errors that may occur during the API calls using `try-catch` blocks.

Here's a detailed documentation for the `Onramper` class:

### Initialization

To use the `Onramper` class, you need to create an instance of it with a configured `HttpClient`. The `HttpClient` is responsible for making HTTP requests to the Onramper API.

Here's an example of how to create an instance of the `Onramper` class:

```javascript
import { HttpClient } from '@cod3x/moon-api';
import { Onramper } from '@cod3x/moon-api';

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

const onramper = new Onramper(http);
```

### Class: Onramper

#### Methods

**`onRamperCheckout(accountName: string, data: TransactionInput, params?: RequestParams)`**

This method is used to initiate a cryptocurrency purchase for a specific account.

* **Parameters:**
  * `accountName`: The name of the account to fund.
  * `data`: An object containing the transaction input details.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the checkout data.
*   **Example:**

    ```javascript
    const accountName = 'myAccount';
    const data = {
      // Transaction input details
    };

    try {
      const response = await onramper.onRamperCheckout(accountName, data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetQuotesBuy(query: OnRamperGetQuotesBuyParams, params?: RequestParams)`**

This method is used to get quotes for buying cryptocurrency.

* **Parameters:**
  * `query`: An object containing the parameters for the quote request.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the quotes for buying cryptocurrency.
*   **Example:**

    ```javascript
    const query = {
      amount: 100,
      crypto: 'BTC',
      fiat: 'USD',
      // Other parameters
    };

    try {
      const response = await onramper.onRamperGetQuotesBuy(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetQuotesSell(query: OnRamperGetQuotesSellParams, params?: RequestParams)`**

This method is used to get quotes for selling cryptocurrency.

* **Parameters:**
  * `query`: An object containing the parameters for the quote request.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the quotes for selling cryptocurrency.
*   **Example:**

    ```javascript
    const query = {
      amount: 1,
      crypto: 'BTC',
      fiat: 'USD',
      // Other parameters
    };

    try {
      const response = await onramper.onRamperGetQuotesSell(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedAssets(query: OnRamperGetSupportedAssetsParams, params?: RequestParams)`**

This method is used to get the supported assets for a specific country and source.

* **Parameters:**
  * `query`: An object containing the country and source.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the supported assets.
*   **Example:**

    ```javascript
    const query = {
      country: 'US',
      source: 'buy',
    };

    try {
      const response = await onramper.onRamperGetSupportedAssets(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedCurrencies(query: OnRamperGetSupportedCurrenciesParams, params?: RequestParams)`**

This method is used to get the supported currencies for a specific type.

* **Parameters:**
  * `query`: An object containing the type.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the supported currencies.
*   **Example:**

    ```javascript
    const query = {
      type: 'fiat',
    };

    try {
      const response = await onramper.onRamperGetSupportedCurrencies(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedDefaultsAll(query: OnRamperGetSupportedDefaultsAllParams, params?: RequestParams)`**

This method is used to get the supported defaults for a specific country and type.

* **Parameters:**
  * `query`: An object containing the country and type.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the supported defaults.
*   **Example:**

    ```javascript
    const query = {
      country: 'US',
      type: 'buy',
    };

    try {
      const response = await onramper.onRamperGetSupportedDefaultsAll(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedOnRampsAll(params?: RequestParams)`**

This method is used to get all supported on-ramps.

* **Parameters:**
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to all supported on-ramps.
*   **Example:**

    ```javascript
    try {
      const response = await onramper.onRamperGetSupportedOnRampsAll();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedPaymentTypes(query: OnRamperGetSupportedPaymentTypesParams, params?: RequestParams)`**

This method is used to get the supported payment types for a specific country, fiat, and type.

* **Parameters:**
  * `query`: An object containing the country, fiat, and type.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the supported payment types.
*   **Example:**

    ```javascript
    const query = {
      country: 'US',
      fiat: 'USD',
      type: 'buy',
    };

    try {
      const response = await onramper.onRamperGetSupportedPaymentTypes(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

**`onRamperGetSupportedPaymentTypesFiat(query: OnRamperGetSupportedPaymentTypesFiatParams, params?: RequestParams)`**

This method is used to get the supported payment types for a specific country and fiat.

* **Parameters:**
  * `query`: An object containing the country and fiat.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to the supported payment types.
*   **Example:**

    ```javascript
    const query = {
      country: 'US',
      fiat: 'USD',
    };

    try {
      const response = await onramper.onRamperGetSupportedPaymentTypesFiat(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    ```

#### Usage

To use the `Onramper` class, you need to create an instance of it with a configured `HttpClient`. The `HttpClient` is responsible for making HTTP requests to the Onramper API.

You can then use the `onramper` instance to call the various methods of the `Onramper` class. Make sure to handle any potential errors that may occur during the API calls using `try-catch` blocks..

