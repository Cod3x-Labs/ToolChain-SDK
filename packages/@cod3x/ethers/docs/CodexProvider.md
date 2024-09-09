# Cod3xProvider


## @cod3x/ethers Package Documentation

### Summary

The `@cod3x/ethers` package is a utility package that provides a `Cod3xProvider` class for interacting with Ethereum-based blockchains using the Cod3xSDK from the `@cod3x/sdk` package. This provider can be used to sign messages, transactions, and typed data using the Cod3xSDK, and it implements the `Provider` and `IEthereumProvider` interfaces from the `ethers` library.



### Usage Examples

Here's a basic example of how to use the `Cod3xProvider` class:

```javascript
import { Cod3xSDK } from '@cod3x/sdk';
import { Cod3xProvider } from '@cod3x/ethers';
import { ethers } from 'ethers';

const SDK = new Cod3xSDK({ /* your configuration */ });
const address = '0xYourEthereumAddress';
const chainId = 1; // mainnet

const provider = new Cod3xProvider({ SDK, address, chainId });

// Now you can use the provider with ethers
const signer = provider.getSigner();
const balance = await signer.getBalance();
console.log(`Balance: ${ethers.utils.formatEther(balance)} ETH`);
```

### API Reference

#### `Cod3xProvider`

A provider for interacting with Ethereum-based blockchains using the Cod3xSDK.

**Constructor**

* `options` (Object)
  * `SDK` (Cod3xSDK): An instance of the Cod3xSDK.
  * `address` (string): The Ethereum address of the account.
  * `chainId` (number): The ID of the Ethereum chain.

**Methods**

*   `request(args: RequestArguments)`: Sends a JSON-RPC request.

    ```javascript
    const blockNumber = await provider.request({ method: 'eth_blockNumber' });
    console.log(`Current block number: ${blockNumber}`);
    ```
*   `updateConfig(options: Cod3xProviderOptions)`: Updates the configuration options.

    ```javascript
    provider.updateConfig({ chainId: 4, address: '0xNewEthereumAddress' });
    ```
*   `connect()`: Connects to the Cod3xSDK.

    ```javascript
    await provider.connect();
    ```
*   `disconnect()`: Disconnects from the Cod3xSDK.

    ```javascript
    await provider.disconnect();
    ```
*   `sendAsync(args: RequestArguments, callback: (error: Error | null, response: any) => void)`: Sends a JSON-RPC request asynchronously.

    ```javascript
    provider.sendAsync({ method: 'eth_blockNumber' }, (error, result) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`Current block number: ${result}`);
      }
    });
    ```
*   `enable()`: Enables the provider.

    ```javascript
    const accounts = await provider.enable();
    console.log(`Connected accounts: ${accounts}`);
    ```
*   `isCod3xProvider()`: Returns `true` if the provider is a `Cod3xProvider`.

    ```javascript
    console.log(`Is Cod3xProvider: ${provider.isCod3xProvider()}`);
    ```
*   `getChainId()`: Returns the ID of the Ethereum chain.

    ```javascript
    console.log(`Chain ID: ${provider.getChainId()}`);
    ```
*   `getSigner()`: Returns the `Cod3xSigner` instance.

    ```javascript
    const signer = provider.getSigner();
    ```
*   `getNetwork()`: Returns the network information.

    ```javascript
    const network = await provider.getNetwork();
    console.log(`Network name: ${network.name}`);
    ```
*   `getBlockNumber()`: Returns the current block number.

    ```javascript
    const blockNumber = await provider.getBlockNumber();
    console.log(`Current block number: ${blockNumber}`);
    ```
*   `getGasPrice()`: Returns the current gas price.

    ```javascript
    const gasPrice = await provider.getGasPrice();
    console.log(`Current gas price: ${gasPrice.toString()} wei`);
    ```
*   `getBalance(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag> | undefined)`: Returns the balance of an account.

    ```javascript
    const balance = await provider.getBalance('0xYourEthereumAddress');
    console.log(`Balance: ${ethers.utils.formatEther(balance)} ETH`);
    ```
*   `getTransactionCount(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag> | undefined)`: Returns the number of transactions sent from an account.

    ```javascript
    const transactionCount = await provider.getTransactionCount('0xYourEthereumAddress');
    console.log(`Transaction count: ${transactionCount}`);
    ```
*   `getCode(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag> | undefined)`: Returns the code of a contract.

    ```javascript
    const code = await provider.getCode('0xYourContractAddress');
    console.log(`Contract code: ${code}`);
    ```
*   `getStorageAt(addressOrName: string | Promise<string>, position: BigNumberish | Promise<BigNumberish>, blockTag?: BlockTag | Promise<BlockTag> | undefined)`: Returns the value of a storage slot of a contract.

    ```javascript
    const storageValue = await provider.getStorageAt('0xYourContractAddress', 0);
    console.log(`Storage value: ${storageValue}`);
    ```
*   `sendTransaction(signedTransaction: string | Promise<string>)`: Sends a transaction.

    ```javascript
    const signer = provider.getSigner();
    const transaction = {
      to: '0xRecipientAddress',
      value: ethers.utils.parseEther('1.0'),
    };
    const tx = await signer.sendTransaction(transaction);
    console.log(`Transaction hash: ${tx.hash}`);
    ```
*   `call(transaction: Deferrable<TransactionRequest>, blockTag?: BlockTag | Promise<BlockTag> | undefined)`: Calls a contract method.

    ```javascript
    const contract = new ethers.Contract('0xYourContractAddress', abi, provider);
    const result = await contract.myMethod();
    console.log(`Method result: ${result}`);
    ```
*   `estimateGas(transaction: Deferrable<TransactionRequest>)`: Estimates the gas required for a transaction.

    ```javascript
    const signer = provider.getSigner();
    const transaction = {
      to: '0xRecipientAddress',
      value: ethers.utils.parseEther('1.0'),
    };
    const gasLimit = await signer.estimateGas(transaction);
    console.log(`Estimated gas limit: ${gasLimit.toString()}`);
    ```
*   `getBlock(blockHashOrBlockTag: BlockTag | Promise<BlockTag>)`: Returns a block.

    ```javascript
    const block = await provider.getBlock('latest');
    console.log(`Block number: ${block.number}`);
    ```
*   `getBlockWithTransactions(blockHashOrBlockTag: BlockTag | Promise<BlockTag>)`: Returns a block with its transactions.

    ```javascript
    const block = await provider.getBlockWithTransactions('latest');
    console.log(`Block number: ${block.number}`);
    console.log(`Transactions: ${block.transactions.length}`);
    ```
*   `getTransaction(transactionHash: string)`: Returns a transaction.

    ```javascript
    const transaction = await provider.getTransaction('0xYourTransactionHash');
    console.log(`Transaction hash: ${transaction.hash}`);
    ```
*   `getTransactionReceipt(transactionHash: string)`: Returns a transaction receipt.

    ```javascript
    const receipt = await provider.getTransactionReceipt('0xYourTransactionHash');
    console.log(`Transaction status: ${receipt.status}`);
    ```
*   `getLogs(filter: Filter)`: Returns logs that match a filter.

    ```javascript
    const filter = {
      address: '0xYourContractAddress',
      topics: [ethers.utils.id('MyEvent()')],
    };
    const logs = await provider.getLogs(filter);
    console.log(`Number of logs: ${logs.length}`);
    ```
*   `resolveName(name: string | Promise<string>)`: Resolves an ENS name to an address.

    ```javascript
    const address = await provider.resolveName('myname.eth');
    console.log(`Address: ${address}`);
    ```
*   `lookupAddress(address: string | Promise<string>)`: Resolves an address to an ENS name.

    ```javascript
    const name = await provider.lookupAddress('0xYourEthereumAddress');
    console.log(`Name: ${name}`);
    ```
*   `emit(eventName: EventType, ...args: any[])`: Emits an event.

    ```javascript
    provider.on('block', (blockNumber) => {
      console.log(`New block: ${blockNumber}`);
    });
    provider.emit('block', 1234567);
    ```
*   `listenerCount(eventName?: EventType | undefined)`: Returns the number of listeners for an event.

    ```javascript
    const listenerCount = provider.listenerCount('block');
    console.log(`Number of listeners: ${listenerCount}`);
    ```
*   `listeners(eventName?: EventType | undefined)`: Returns the listeners for an event.

    ```javascript
    const listeners = provider.listeners('block');
    console.log(`Number of listeners: ${listeners.length}`);
    ```
*   `removeAllListeners(eventName?: EventType | undefined)`: Removes all listeners for an event.

    ```javascript
    provider.removeAllListeners('block');
    ```
*   `waitForTransaction(transactionHash: string, confirmations?: number | undefined, timeout?: number | undefined)`: Waits for a transaction to be mined.

    ```javascript
    const receipt = await provider.waitForTransaction('0xYourTransactionHash');
    console.log(`Transaction status: ${receipt.status}`);
    ```
*   `on(eventName: EventType, listener: Listener)`: Adds a listener for an event.

    ```javascript
    provider.on('block', (blockNumber) => {
      console.log(`New block: ${blockNumber}`);
    });
    ```
*   `once(eventName: EventType, listener: Listener)`: Adds a one-time listener for an event.

    ```javascript
    provider.once('block', (blockNumber) => {
      console.log(`New block: ${blockNumber}`);
    });
    ```
*   `off(eventName: EventType, listener?: Listener | undefined)`: Removes a listener for an event.

    ```javascript
    const listener = (blockNumber) => {
      console.log(`New block: ${blockNumber}`);
    };
    provider.on('block', listener);
    provider.off('block', listener);
    ```

**Example**

```javascript
const provider = new Cod3xProvider({ SDK, address, chainId });
window.ethereum = provider;
```
