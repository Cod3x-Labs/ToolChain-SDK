# @cod3x/openapi

## @cod3x/openapi Package Documentation

The `@cod3x/openapi` package is a comprehensive library that provides a set of APIs for interacting with various blockchain networks and decentralized finance (DeFi) protocols. This package includes support for Ethereum, Bitcoin, Bitcoin Cash, Dogecoin, Litecoin, EOS, Solana, Cosmos, Tron, and more.

## Generating @cod3x/openapi
```bash
npx swagger-typescript-api -p swagger.json -o ./src/lib --modular --route-types   --unwrap-response-data   --sort-types       --sort-routes      --enum-names-as-values   --extract-request-params       --extract-request-body     --extract-response-body   --extract-response-error    --extract-enums --single-http-client
```

## **Installing Cod3x API:**

To use the Cod3x API package, first install it to a project:

#### To install Cod3x **API**:

{% tabs %}
{% tab title="npm" %}
```bash
npm install @cod3x/openapi
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn add @cod3x/openapi
```
{% endtab %}

{% tab title="pnpm" %}
```bash
pnpm add @cod3x/openapi
```
{% endtab %}
{% endtabs %}

### Usage

To use the `@cod3x/openapi` package, you'll first need to install it using a package manager like npm or Yarn. Once you've installed the package, you can import the classes and methods you need into your project.

Here's an example of how to use the `Accounts` class to create a new Ethereum account and transfer ETH:

```javascript
import { HttpClient, Accounts } from '@cod3x/openapi';

// Initialize the HttpClient with your API base URL and security worker
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

// Create an instance of the Accounts class
const accounts = new Accounts(http);

// Create a new Ethereum account
const createAccountData = await accounts.createAccount({ private_key: 'your_private_key' });
console.log('New account created:', createAccountData.address);

// Transfer ETH from the new account to another account
const transferEthData = await accounts.transferEth(createAccountData.name, {
  to: '0xAnotherAccountAddress',
  value: '1000000000000000000', // 1 ETH in wei
});
console.log('Transfer successful:', transferEthData.transactionHash);
```

This example demonstrates how to use the `Accounts` class to create a new Ethereum account and transfer ETH to another account. The `HttpClient` class is used to make HTTP requests to the API, and the `securityWorker` function is used to add an authorization header to the requests.

### Initialization

To use the `@cod3x/openapi` package, you'll first need to initialize an `HttpClient` object with your API base URL and security worker. The security worker is a function that returns the headers to be included in the API requests. In this case, it returns an authorization header with a bearer token.

Here's an example of how to initialize the `HttpClient` object:

```javascript
import { HttpClient } from '@cod3x/openapi';

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
```

In this example, the `baseUrl` property is set to the URL of the API, and the `securityWorker` property is set to a function that returns an authorization header with a bearer token. The `securityData` object is passed to the `securityWorker` function, which can be used to retrieve the bearer token.

Once you've initialized the `HttpClient` object, you can use it to create instances of the classes provided by the `@cod3x/openapi` package. For example:

```javascript
import { Accounts } from '@cod3x/openapi';

const accounts = new Accounts(http);
```

In this example, the `Accounts` class is imported from the `@cod3x/openapi` package, and an instance of the class is created using the `HttpClient` object.

## Classes

The package is organized into several files, each containing a class that provides methods for interacting with a specific blockchain network or DeFi protocol. The main files in the package are:

\

[accounts.md](./docs/accounts.md "mention")

Provides methods for creating and managing Ethereum accounts, deploying contracts, signing messages and transactions, and transferring ETH.

[bitcoin.md](./docs/bitcoin.md "mention")

Provide methods for creating and managing Bitcoin accounts, and signing transactions

[bitcoin-cash.md](./docs/bitcoin-cash.md "mention")

Provide methods for creating and managing Bitcoin Cash accounts, and signing transactions


[cosmos.md](./docs/cosmos.md "mention")

Provide methods for interacting with the Cosmos  blockchain networks, including creating and managing accounts, and signing transactions.

[dogecoin.md](./docs/dogecoin.md "mention")

Provide methods for creating and managing Dogecoin accounts, and signing transactions

[ens.md](./docs/ens.md "mention")

Provides methods for interacting with the Ethereum Name Service (ENS), including registering and resolving domain names.

[eos.md](./docs/eos.md "mention")

Provide methods for interacting with the EOS blockchain networks, including creating and managing accounts, and signing transactions.

[erc20.md](./docs/erc20.md "mention")

Provide methods for interacting with Ethereum-based tokens, including transferring tokens, checking balances, and approving contracts.

[erc721.md](./docs/erc721.md "mention")

Provide methods for interacting with Ethereum-based tokens, including transferring tokens, checking balances, and approving contracts.

[erc1155.md](./docs/erc1155.md "mention")

Provide methods for interacting with Ethereum-based tokens, including transferring tokens, checking balances, and approving contracts.

[litecoin.md](./docs/litecoin.md "mention")

Provide methods for creating and managing Litecoin accounts, and signing transactions

[onramper.md](./docs/onramper.md "mention")

Provides methods for interacting with the Onramper fiat onramp service, allowing users to buy cryptocurrencies with fiat currency.

[ripple.md](./docs/ripple.md "mention")

Provides methods for interacting with the Ripple blockchain network, including creating and managing accounts, and sending and receiving payments.

[solana.md](./docs/solana.md "mention")

Provides methods for interacting with the Solana blockchain network, including creating and managing accounts, and sending and receiving tokens.

[tron.md](./docs/tron.md "mention")

Provides methods for interacting with the TRON blockchain network, including creating and managing accounts, and sending and receiving tokens.

[uniswap.md](./docs/uniswap.md "mention")

Provide methods for interacting with the Uniswap decentralized exchange (DEX) protocols, including swapping tokens and checking prices

Overall, the `@cod3x/openapi` package is a powerful and flexible library that provides a wide range of APIs for interacting with various blockchain networks and DeFi protocols. Whether you're building a simple wallet application or a complex decentralized finance platform, this package has the tools you need to get the job done.


## Contributing

We welcome contributions to the @cod3x/openapi package! Here's how you can help:

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

By contributing to @cod3x/openapi, you agree that your contributions will be licensed under its MIT License.

Thank you for your interest in improving @cod3x/openapi!