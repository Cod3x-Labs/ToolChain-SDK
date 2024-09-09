# Accounts

### Initialization

To use the `Accounts` class, you first need to initialize an `HttpClient` object with your API base URL and security worker. The security worker is a function that returns the headers to be included in the API requests. In this case, it returns an authorization header with a bearer token.

```javascript
import { HttpClient, Accounts } from '@cod3x/openapi';

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

const accounts = new Accounts(http);
```

### Methods

#### `broadcastTx(accountName: string, data: BroadcastInput, params: RequestParams = {})`

Broadcasts a raw transaction to the blockchain.

* **Parameters:**
  * `accountName`: The name of the account.
  * `data`: An object containing the `chainId` and `rawTransaction` properties.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `BroadcastTxData` object.
*   **Example:**

    ```javascript
    const broadcastTxData = await accounts.broadcastTx('accountName', {
      chainId: '1',
      rawTransaction: '0xYourRawTransaction',
    });
    console.log('Transaction broadcasted:', broadcastTxData.transactionHash);
    ```

#### `createAccount(data: CreateAccountInput, params: RequestParams = {})`

Creates a new Ethereum account.

* **Parameters:**
  * `data`: An optional object containing the `private_key` property. If not provided, a new private key will be generated.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `CreateAccountData` object.
*   **Example:**

    ```javascript
    const createAccountData = await accounts.createAccount({ private_key: 'your_private_key' });
    console.log('New account created:', createAccountData.address);
    ```

#### `deleteAccount(accountName: string, params: RequestParams = {})`

Deletes an existing Ethereum account.

* **Parameters:**
  * `accountName`: The name of the account to delete.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `DeleteAccountData` object.
*   **Example:**

    ```javascript
    const deleteAccountData = await accounts.deleteAccount('accountName');
    console.log('Account deleted:', deleteAccountData.success);
    ```

#### `deployContract(accountName: string, data: DeployInput, params: RequestParams = {})`

Deploys a new smart contract to the blockchain.

* **Parameters:**
  * `accountName`: The name of the account that will deploy the contract.
  * `data`: An object containing the `abi`, `bytecode`, `chain_id`, and `constructor_args` properties.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `DeployContractData` object.
*   **Example:**

    ```javascript
    const deployContractData = await accounts.deployContract('accountName', {
      abi: 'contract_abi',
      bytecode: 'contract_bytecode',
      chain_id: '1',
      constructor_args: 'constructor_arguments',
    });
    console.log('Contract deployed:', deployContractData.contractAddress);
    ```

#### `encodeData(data: AbiEncodeInput, params: RequestParams = {})`

Encodes data using the ABI of a smart contract.

* **Parameters:**
  * `data`: An object containing the `abi`, `functionName`, and `params` properties.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to an `EncodeDataData` object.
*   **Example:**

    ```javascript
    const encodeDataData = await accounts.encodeData({
      abi: 'contract_abi',
      functionName: 'functionName',
      params: ['param1', 'param2'],
    });
    console.log('Encoded data:', encodeDataData.data);
    ```

#### `estimateGas(accountName: string, data: InputBody, params: RequestParams = {})`

Estimates the amount of gas required to execute a transaction.

* **Parameters:**
  * `accountName`: The name of the account that will execute the transaction.
  * `data`: An object containing the transaction details.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to an `EstimateGasData` object.
*   **Example:**

    ```javascript
    const estimateGasData = await accounts.estimateGas('accountName', {
      to: 'destination_address',
      value: 'transaction_value',
    });
    console.log('Estimated gas:', estimateGasData.gas);
    ```

#### `getAccount(accountName: string, params: RequestParams = {})`

Retrieves information about an Ethereum account.

* **Parameters:**
  * `accountName`: The name of the account.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `GetAccountData` object.
*   **Example:**

    ```javascript
    const getAccountData = await accounts.getAccount('accountName');
    console.log('Account information:', getAccountData);
    ```

#### `getBalance({ accountName, ...query }: GetBalanceParams, params: RequestParams = {})`

Retrieves the balance of an Ethereum account.

* **Parameters:**
  * `accountName`: The name of the account.
  * `query`: Optional query parameters, including `token_address` and `token_id`.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `GetBalanceData` object.
*   **Example:**

    ```javascript
    const getBalanceData = await accounts.getBalance({ accountName: 'accountName' });
    console.log('Account balance:', getBalanceData.balance);
    ```

#### `getNonce(accountName: string, params: RequestParams = {})`

Retrieves the nonce of an Ethereum account.

* **Parameters:**
  * `accountName`: The name of the account.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `GetNonceData` object.
*   **Example:**

    ```javascript
    const getNonceData = await accounts.getNonce('accountName');
    console.log('Account nonce:', getNonceData.nonce);
    ```

#### `listAccounts(params: RequestParams = {})`

Retrieves a list of all Ethereum accounts.

* **Parameters:**
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `ListAccountsData` object.
*   **Example:**

    ```javascript
    const listAccountsData = await accounts.listAccounts();
    console.log('List of accounts:', listAccountsData.accounts);
    ```

#### `signMessage(accountName: string, data: SignMessage, params: RequestParams = {})`

Signs a message using an Ethereum account.

* **Parameters:**
  * `accountName`: The name of the account.
  * `data`: An object containing the `message` property.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `SignMessageData` object.
*   **Example:**

    ```javascript
    const signMessageData = await accounts.signMessage('accountName', { message: 'message_to_sign' });
    console.log('Signed message:', signMessageData.signature);
    ```

#### `signTransaction(accountName: string, data: InputBody, params: RequestParams = {})`

Signs a transaction using an Ethereum account.

* **Parameters:**
  * `accountName`: The name of the account.
  * `data`: An object containing the transaction details.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `SignTransactionData` object.
*   **Example:**

    ```javascript
    const signTransactionData = await accounts.signTransaction('accountName', {
      to: 'destination_address',
      value: 'transaction_value',
    });
    console.log('Signed transaction:', signTransactionData.rawTransaction);
    ```

#### `signTypedData(accountName: string, data: SignTypedData, params: RequestParams = {})`

Signs a typed data message using an Ethereum account.

* **Parameters:**
  * `accountName`: The name of the account.
  * `data`: An object containing the `data` property.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `SignTypedDataData` object.
*   **Example:**

    ```javascript
    const signTypedDataData = await accounts.signTypedData('accountName', { data: 'typed_data_message' });
    console.log('Signed typed data:', signTypedDataData.signature);
    ```

#### `suggestGasPrice({ accountName, ...query }: SuggestGasPriceParams, params: RequestParams = {})`

Suggests a gas price for a transaction.

* **Parameters:**
  * `accountName`: The name of the account.
  * `query`: Optional query parameters, including `speed`.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `SuggestGasPriceData` object.
*   **Example:**

    ```javascript
    const suggestGasPriceData = await accounts.suggestGasPrice({ accountName: 'accountName' });
    console.log('Suggested gas price:', suggestGasPriceData.gasPrice);
    ```

#### `transferEth(accountName: string, data: InputBody, params: RequestParams = {})`

Transfers ETH from one Ethereum account to another.

* **Parameters:**
  * `accountName`: The name of the source account.
  * `data`: An object containing the transaction details.
  * `params`: Optional request parameters.
* **Returns:** A promise that resolves to a `TransferEthData` object.
*   **Example:**

    ```javascript
    const transferEthData = await accounts.transferEth('accountName', {
      to: 'destination_address',
      value: 'transaction_value',
    });
    console.log('Transfer successful:', transferEthData.transactionHash);
    ```

These examples assume that you have already initialized the `HttpClient` and `Accounts` objects as shown in the provided code snippet. Make sure to replace the placeholders with actual values.

