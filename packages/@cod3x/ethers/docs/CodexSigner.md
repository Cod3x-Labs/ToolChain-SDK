# Cod3xSigner

### Summary

The `@cod3x/ethers` package is a utility package that provides a `Cod3xSigner` class for signing messages, transactions, and typed data using the Cod3xSDK from the `@cod3x/sdk` package. This signer implements the `Signer` and `TypedDataSigner` interfaces from the `ethers` library.


### Usage Examples

Here's a basic example of how to use the `Cod3xSigner` class:

```javascript
import { Cod3xSDK } from '@cod3x/sdk';
import { Cod3xSigner } from '@cod3x/ethers';
import { ethers } from 'ethers';

const SDK = new Cod3xSDK({ /* your configuration */ });
const address = '0xYourEthereumAddress';
const chainId = 1; // mainnet

const signer = new Cod3xSigner({ SDK, address, chainId });

// Now you can use the signer with ethers
const message = 'Hello, world!';
const signature = await signer.signMessage(message);
console.log(`Signature: ${signature}`);
```

### API Reference

#### `Cod3xSigner`

A signer for signing messages, transactions, and typed data using the Cod3xSDK.

**Constructor**

* `config` (Object)
  * `SDK` (Cod3xSDK): An instance of the Cod3xSDK.
  * `address` (string): The Ethereum address of the account.
  * `chainId` (number): The ID of the Ethereum chain.
* `provider` (Provider): An optional provider.

**Methods**

*   `_signTypedData(domain: TypedDataDomain, types: Record<string, TypedDataField[]>, value: Record<string, any>)`: Signs a typed data object. This method is not implemented and throws an error.

    ```javascript
    // This method is not implemented and throws an error
    ```
*   `updateConfig(config: Cod3xSignerConfig)`: Updates the configuration options.

    ```javascript
    signer.updateConfig({ chainId: 4, address: '0xNewEthereumAddress' });
    ```
*   `connect(provider: Provider)`: Connects the signer to a provider.

    ```javascript
    const provider = new ethers.providers.JsonRpcProvider('https://rpc.example.com');
    const connectedSigner = signer.connect(provider);
    ```
*   `signTypedData(domain: TypedDataDomain, types: Record<string, TypedDataField[]>, value: Record<string, string>)`: Signs a typed data object.

    ```javascript
    const domain = {
      name: 'MyDApp',
      version: '1',
      chainId: 1,
      verifyingContract: '0xYourContractAddress',
    };
    const types = {
      Person: [
        { name: 'name', type: 'string' },
        { name: 'age', type: 'uint256' },
      ],
    };
    const value = {
      name: 'John Doe',
      age: 30,
    };
    const signature = await signer.signTypedData(domain, types, value);
    console.log(`Signature: ${signature}`);
    ```
*   `getAddress()`: Returns the Ethereum address of the account.

    ```javascript
    const address = await signer.getAddress();
    console.log(`Address: ${address}`);
    ```
*   `signMessage(message: BytesLike)`: Signs a message.

    ```javascript
    const message = 'Hello, world!';
    const signature = await signer.signMessage(message);
    console.log(`Signature: ${signature}`);
    ```
*   `broadcastTransaction(signedTransaction: string)`: Broadcasts a signed transaction.

    ```javascript
    const signedTransaction = '0xYourSignedTransaction';
    const transactionHash = await signer.broadcastTransaction(signedTransaction);
    console.log(`Transaction hash: ${transactionHash}`);
    ```
*   `sendTransaction(transaction: TransactionRequest)`: Signs and broadcasts a transaction.

    ```javascript
    const transaction = {
      to: '0xRecipientAddress',
      value: ethers.utils.parseEther('1.0'),
    };
    const txResponse = await signer.sendTransaction(transaction);
    console.log(`Transaction hash: ${txResponse.hash}`);
    ```
*   `transactionRequestToInputBody(tx: TransactionRequest)`: Converts a `TransactionRequest` object to an `InputBody` object.

    ```javascript
    const transaction = {
      to: '0xRecipientAddress',
      value: ethers.utils.parseEther('1.0'),
    };
    const inputBody = signer.transactionRequestToInputBody(transaction);
    console.log(`Input body: ${JSON.stringify(inputBody)}`);
    ```
*   `codexTransactionResponseToTransactions(tx: Cod3xTransaction)`: Converts a `Cod3xTransaction` object to an array of `TransactionData` objects.

    ```javascript
    const codexTransaction = {
      transactions: [
        {
          hash: '0xYourTransactionHash',
          // ...
        },
      ],
    };
    const transactions = signer.codexTransactionResponseToTransactions(codexTransaction);
    console.log(`Transactions: ${JSON.stringify(transactions)}`);
    ```
*   `signTransaction(transaction: TransactionRequest)`: Signs a transaction.

    ```javascript
    const transaction = {
      to: '0xRecipientAddress',
      value: ethers.utils.parseEther('1.0'),
    };
    const signedTransaction = await signer.signTransaction(transaction);
    console.log(`Signed transaction: ${signedTransaction}`);
    ```
*   `getTypedDataDomain(name: string, version: string, chainId: number, verifyingContract: string)`: Returns a `TypedDataDomain` object.

    ```javascript
    const domain = await signer.getTypedDataDomain('MyDApp', '1', 1, '0xYourContractAddress');
    console.log(`Typed data domain: ${JSON.stringify(domain)}`);
    ```
*   `getTypedData(domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, message: Record<string, string>)`: Returns a `Typed` object.

    ```javascript
    const domain = {
      name: 'MyDApp',
      version: '1',
      chainId: 1,
      verifyingContract: '0xYourContractAddress',
    };
    const types = {
      Person: [
        { name: 'name', type: 'string' },
        { name: 'age', type: 'uint256' },
      ],
    };
    const value = {
      name: 'John Doe',
      age: 30,
    };
    const typedData = await signer.getTypedData(domain, types, value);
    console.log(`Typed data: ${JSON.stringify(typedData)}`);
    ```

**Example**

```javascript
const signer = new Cod3xSigner({ SDK, address, chainId });
```
