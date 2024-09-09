# @cod3x/rainbowkit

## @cod3x/rainbowkit Package Documentation**:**

The `@cod3x/rainbowkit` package is a React component that provides authentication functionality using the Cod3x SDK and RainbowKit. This package allows users to sign in with Ethereum to the app using SIWE (Sign-In with Ethereum) and manages the authentication state.

\


## **Installing Cod3x Rainbowkit:**

To utilize the Cod3x rainbowkit package, first install it to the desired directory of the project:

#### To install Cod3x rainbowkit

{% tabs %}
{% tab title="npm" %}
```bash
npm install @cod3x/rainbowkit
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn add @cod3x/rainbowkit
```
{% endtab %}

{% tab title="pnpm" %}
```bash
pnpm add @cod3x/rainbowkit
```
{% endtab %}
{% endtabs %}



### Usage

Import the `RainbowCod3xProvider` component from the package and wrap your application with it.



```tsx
import {RainbowKitUseCod3xProvider} from '@cod3x/rainbowkit';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { AppProps } from 'next/app';
import { WagmiConfig } from 'wagmi';

export default function App({ Component, pageProps }: AppProps) {
  // You'll need to resolve AUTHENTICATION_STATUS here
  // using your application's authentication system.
  // It needs to be either 'loading' (during initial load),
  // 'unauthenticated' or 'authenticated'.

  return (
    <WagmiConfig {...etc}>
      <RainbowKitUseCodexProvider
       onSignIn={onSignIn} onSignOut={onSignOut}
      >
        <RainbowKitProvider {...etc}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </RainbowKitAuthenticationProvider>
    </WagmiConfig>
  );
}
```


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

By contributing to @cod3x/rainbowkit, you agree that your contributions will be licensed under its MIT License.

Thank you for your interest in improving @cod3x/rainbowkit!