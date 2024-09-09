# @cod3x/viem

## @cod3x/viem Package Documentation

The `@cod3x/viem` package is a utility package that allows for the creation of a local account using the CodexSDK from the `@cod3x/sdk` package. This local account can be used with the `viem` library for signing messages, transactions, and typed data.=

## **Installing Codex Viem:**

To utilize the Codex Viem package, first install it to the desired directory of the project:

#### To install Codex Viem:

{% tabs %}
{% tab title="npm" %}
```bash
npm install @cod3x/viem
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn install @cod3x/viem
```
{% endtab %}

{% tab title="pnpm" %}
```bash
pnpm add @cod3x/viem
```
{% endtab %}
{% endtabs %}

### Usage Examples

Here's a basic example of how to use the `createCodexAccount` function:

```javascript
import { CodexSDK } from '@cod3x/sdk';
import { createCodexAccount } from '@cod3x/viem';

const sdk = new CodexSDK({ /* your configuration */ });
const ethereumAddress = '0xYourEthereumAddress';

const account = await createCodexAccount({ sdk, ethereumAddress });

// Now you can use the account with viem
```

### API Reference

#### `createCodexAccount`

Creates a local account using the CodexSDK.

**Parameters**

* `input` (Object)
  * `sdk` (CodexSDK): An instance of the CodexSDK.
  * `ethereumAddress` (string): The Ethereum address of the account.

**Returns**

A promise that resolves to a `LocalAccount` object.

**Example**

```javascript
const account = await createCodexAccount({ sdk, ethereumAddress });
```


## Contributing

We welcome contributions to the @cod3x/viem package! Here's how you can help:

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

By contributing to @cod3x/viem, you agree that your contributions will be licensed under its MIT License.

Thank you for your interest in improving @cod3x/viem!
