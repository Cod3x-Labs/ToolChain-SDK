# @cod3x/ethers

## @cod3x/ethers Package Documentation

### Summary

The `@cod3x/ethers` package is a utility package that provides a `Cod3xProvider` class and a `Cod3xSigner` class for interacting with Ethereum-based blockchains using the Cod3xSDK from the `@cod3x/sdk` package. The `Cod3xProvider` class implements the `Provider` and `IEthereumProvider` interfaces from the `ethers` library, while the `Cod3xSigner` class implements the `Signer` and `TypedDataSigner` interfaces from the `ethers` library.

### Setup

To use the `@cod3x/ethers` package, you need to install it and import the `Cod3xProvider` and `Cod3xSigner` classes.

#### To install Cod3x Ethers:

{% tabs %}
{% tab title="npm" %}
```bash
npm install @cod3x/ethers
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn add @cod3x/ethers
```
{% endtab %}

{% tab title="pnpm" %}
```bash
pnpm add @cod3x/ethers
```
{% endtab %}
{% endtabs %}

#### Importing the classes

To import the `Cod3xProvider` and `Cod3xSigner` classes, you can use the following code:

```javascript
import { Cod3xProvider, Cod3xSigner } from '@cod3x/ethers';
```

### Usage

#### Cod3xProvider

The `Cod3xProvider` class is a provider for interacting with Ethereum-based blockchains using the Cod3xSDK. It can be used to sign messages, transactions, and typed data using the Cod3xSDK, and it implements the `Provider` and `IEthereumProvider` interfaces from the `ethers` library.

To create a new instance of the `Cod3xProvider` class, you need to provide a configuration object that contains the following properties:

* `SDK` (Cod3xSDK): An instance of the Cod3xSDK.
* `address` (string): The Ethereum address of the account.
* `chainId` (number): The ID of the Ethereum chain.

Here's an example of how to create a new instance of the `Cod3xProvider` class:

```javascript
import { Cod3xSDK } from '@cod3x/sdk';
import { Cod3xProvider } from '@cod3x/ethers';

const SDK = new Cod3xSDK({ /* your configuration */ });
const address = '0xYourEthereumAddress';
const chainId = 1; // mainnet

const provider = new Cod3xProvider({ SDK, address, chainId });
```

Documentation here:

[`Cod3xProvider`](moonprovider-98424fc361554e529b42c6618739e9be.md)

#### Cod3xSigner

The `Cod3xSigner` class is a signer for signing messages, transactions, and typed data using the Cod3xSDK. It implements the `Signer` and `TypedDataSigner` interfaces from the `ethers` library.

To create a new instance of the `Cod3xSigner` class, you need to provide a configuration object that contains the following properties:

* `SDK` (Cod3xSDK): An instance of the Cod3xSDK.
* `address` (string): The Ethereum address of the account.
* `chainId` (number): The ID of the Ethereum chain.

Here's an example of how to create a new instance of the `Cod3xSigner` class:

```javascript
import { Cod3xSDK } from '@cod3x/sdk';
import { Cod3xSigner } from '@cod3x/ethers';

const SDK = new Cod3xSDK({ /* your configuration */ });
const address = '0xYourEthereumAddress';
const chainId = 1; // mainnet

const signer = new Cod3xSigner({ SDK, address, chainId });
```

Documentation here:

[Cod3xSigner](moonsigner-48c2980a33ab459b98198d189f18f641.md)

### Additional notes
# @cod3x/ethers

## @cod3x/ethers Package Documentation

### Summary

The `@cod3x/ethers` package is a utility package that provides a `Cod3xProvider` class and a `Cod3xSigner` class for interacting with Ethereum-based blockchains using the Cod3xSDK from the `@cod3x/sdk` package. The `Cod3xProvider` class implements the `Provider` and `IEthereumProvider` interfaces from the `ethers` library, while the `Cod3xSigner` class implements the `Signer` and `TypedDataSigner` interfaces from the `ethers` library.

### Setup

To use the `@cod3x/ethers` package, you need to install it and import the `Cod3xProvider` and `Cod3xSigner` classes.

#### To install Cod3x Ethers:

{% tabs %}
{% tab title="npm" %}
```bash
npm install @cod3x/ethers
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn add @cod3x/ethers
```
{% endtab %}

{% tab title="pnpm" %}
```bash
pnpm add @cod3x/ethers
```
{% endtab %}
{% endtabs %}

#### Importing the classes

To import the `Cod3xProvider` and `Cod3xSigner` classes, you can use the following code:

```javascript
import { Cod3xProvider, Cod3xSigner } from '@cod3x/ethers';
```

### Usage

#### Cod3xProvider

The `Cod3xProvider` class is a provider for interacting with Ethereum-based blockchains using the Cod3xSDK. It can be used to sign messages, transactions, and typed data using the Cod3xSDK, and it implements the `Provider` and `IEthereumProvider` interfaces from the `ethers` library.

To create a new instance of the `Cod3xProvider` class, you need to provide a configuration object that contains the following properties:

* `SDK` (Cod3xSDK): An instance of the Cod3xSDK.
* `address` (string): The Ethereum address of the account.
* `chainId` (number): The ID of the Ethereum chain.

Here's an example of how to create a new instance of the `Cod3xProvider` class:

```javascript
import { Cod3xSDK } from '@cod3x/sdk';
import { Cod3xProvider } from '@cod3x/ethers';

const SDK = new Cod3xSDK({ /* your configuration */ });
const address = '0xYourEthereumAddress';
const chainId = 1; // mainnet

const provider = new Cod3xProvider({ SDK, address, chainId });
```

Documentation here:

[`Cod3xProvider`](moonprovider-98424fc361554e529b42c6618739e9be.md)

#### Cod3xSigner

The `Cod3xSigner` class is a signer for signing messages, transactions, and typed data using the Cod3xSDK. It implements the `Signer` and `TypedDataSigner` interfaces from the `ethers` library.

To create a new instance of the `Cod3xSigner` class, you need to provide a configuration object that contains the following properties:

* `SDK` (Cod3xSDK): An instance of the Cod3xSDK.
* `address` (string): The Ethereum address of the account.
* `chainId` (number): The ID of the Ethereum chain.

Here's an example of how to create a new instance of the `Cod3xSigner` class:

```javascript
import { Cod3xSDK } from '@cod3x/sdk';
import { Cod3xSigner } from '@cod3x/ethers';

const SDK = new Cod3xSDK({ /* your configuration */ });
const address = '0xYourEthereumAddress';
const chainId = 1; // mainnet

const signer = new Cod3xSigner({ SDK, address, chainId });
```

Documentation here:

[Cod3xSigner](moonsigner-48c2980a33ab459b98198d189f18f641.md)

### Additional notes

* The `Cod3xProvider` class can be connected to a `Cod3xSigner` instance using the `getSigner` method.
* The `Cod3xSigner` class can be connected to a `Cod3xProvider` instance using the `connect` method.
* The `Cod3xProvider` class and the `Cod3xSigner` class can be used with other `ethers` classes and functions, such as `Contract`, `Wallet`, and `utils`.
* The `Cod3xProvider` class and the `Cod3xSigner` class are compatible with the Ethereum JSON-RPC API, which means that they can be used with other Ethereum clients and tools that support JSON-RPC.

* The `Cod3xProvider` class can be connected to a `Cod3xSigner` instance using the `getSigner` method.
* The `Cod3xSigner` class can be connected to a `Cod3xProvider` instance using the `connect` method.
* The `Cod3xProvider` class and the `Cod3xSigner` class can be used with other `ethers` classes and functions, such as `Contract`, `Wallet`, and `utils`.
* The `Cod3xProvider` class and the `Cod3xSigner` class are compatible with the Ethereum JSON-RPC API, which means that they can be used with other Ethereum clients and tools that support JSON-RPC.
* The `Cod3xProvider` class and the `Cod3xSigner` class are designed to be used with the Cod3xSDK, which is a software development kit for building decentralized applications on the Cod3xbeam and Cod3xriver networks. However, they can also be used with other Ethereum-based blockchains that support the Ethereum JSON-RPC API.


## Contributing

We welcome contributions to the @cod3x/ethers package! Here's how you can help:

### Reporting Issues

If you find a bug or have a suggestion for improving the package:

1. Check if the issue already exists in the [GitHub Issues](https://github.com/your-repo/issues).
2. If not, open a new issue, providing as much detail as possible about the problem or suggestion.

### Submitting Pull Requests

1. Fork the repository and create your branch from `main`.
2. Install dependencies: `npm install`
3. Make your changes, adding tests if applicable.
4. Ensure the test suite passes: `npm test`
5. Run the linter and fix any issues: `npm run lint:fix`
6. Format your code: `npm run prettier:fix`
7. Commit your changes using a descriptive commit message.
8. Push to your fork and submit a pull request to the `main` branch.

### Development Scripts

- `npm run build`: Build the package
- `npm run dev`: Build and watch for changes
- `npm test`: Run tests
- `npm run coverage`: Run tests with coverage report
- `npm run lint`: Check for linting errors
- `npm run lint:fix`: Fix linting errors
- `npm run prettier`: Check code formatting
- `npm run prettier:fix`: Fix code formatting
- `npm run verify`: Run linter and prettier checks
- `npm run verify:fix`: Fix linter and prettier issues

### Coding Style

Please follow the existing coding style. We use ESLint and Prettier to maintain code quality and consistency.

### License

By contributing to @cod3x/ethers, you agree that your contributions will be licensed under its MIT License.

Thank you for your interest in improving @cod3x/ethers!