# @cod3x/wagmi

## @cod3x/wagmi Package Documentation

The `@cod3x/wagmi` package is a connector for the `wagmi` library that allows for the integration of the CodexSDK from the `@cod3x/sdk` package. This connector can be used to connect to a Codex wallet and interact with Ethereum-based blockchains.

## **Installing Codex Wagmi:**

To use the Codex Wagmi package, first install it to a project:

#### To install Codex Wagmi:

{% tabs %}
{% tab title="npm" %}
```bash
npm install @cod3x/wagmi
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn add @cod3x/wagmi
```
{% endtab %}

{% tab title="pnpm" %}
```bash
pnpm add @cod3x/wagmi
```
{% endtab %}
{% endtabs %}

### Usage Examples

Here's a basic example of how to use the `createCodexConnector` function:

```javascript
import { CodexSDK } from '@cod3x/sdk';
import { createCodexConnector } from '@cod3x/wagmi';
import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains([chain], [publicProvider()]);

const SDK = new CodexSDK({ /* your configuration */ });
const address = '0xYourEthereumAddress';
const chainId = 1; // mainnet

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [
    createCodexConnector({ SDK, address, chainId, chains }),
  ],
});

function App() {
  return (
    <WagmiConfig client={client}>
      {/* Your app components */}
    </WagmiConfig>
  );
}
```

### API Reference

#### `createCodexConnector`

Creates a connector for the `wagmi` library using the CodexSDK.

**Parameters**

* `options` (Object)
  * `SDK` (CodexSDK): An instance of the CodexSDK.
  * `address` (string): The Ethereum address of the account.
  * `chainId` (number): The ID of the Ethereum chain.
  * `chains` (Chain\[]): An array of Ethereum chains.

**Returns**

A `CreateConnectorFn` function that can be used to create a connector for the `wagmi` library.

**Example**

```javascript
const connector = createCodexConnector({ SDK, address, chainId, chains });
```

## Contributing

We welcome contributions to the @cod3x/wagmi package! Here's how you can help:

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

By contributing to @cod3x/wagmi, you agree that your contributions will be licensed under its MIT License.

Thank you for your interest in improving @cod3x/wagmi!
