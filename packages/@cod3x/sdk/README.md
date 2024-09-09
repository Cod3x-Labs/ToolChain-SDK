# @cod3x/sdk

## @cod3x/sdk Package Documentation

## **About codex SDK:**

The @cod3x/sdk package is a comprehensive SDK that provides easy access to various blockchain functionalities. It supports multiple chains such as Ethereum, Solana, Bitcoin, Cosmos, EOS, Litecoin, Ripple, Tron, Bitcoincash, and Dogecoin. The SDK includes functionalities for managing accounts, interacting with DeFi protocols like Aave, Uniswap, and Yearn, and working with NFTs (ERC-20, ERC-721, and ERC-1155).

## **Installing codex SDK:**

To utilize the codex SDK package, first install it to the desired directory of the project:

#### To install codex SDK:

{% tabs %}
{% tab title="npm" %}
```bash
npm install @cod3x/sdk
```
{% endtab %}

{% tab title="yarn" %}
```bash
yarn add @cod3x/sdk
```
{% endtab %}

{% tab title="pnpm" %}
```bash
pnpm add @cod3x/sdk
```
{% endtab %}
{% endtabs %}

### Usage

Here's a basic example of how to use the SDK:

```javascript
import { CodexSDK } from '@cod3x/sdk';

const codexSDK = new CodexSDK({ apiKey: 'your-api-key' });

// List accounts
const accounts = await codexSDK.listAccounts();
console.log(accounts);

// Create a new account
const newAccount = await codexSDK.createAccount();
console.log(newAccount);

// Sign a transaction
const signedTx = await codexSDK.SignTransaction(wallet, transaction);
console.log(signedTx);

// Broadcast a transaction
const txHash = await codexSDK.SendTransaction(wallet, signedTx, chain_id);
console.log(txHash);
```

### Events

The codexSDK class emits various events that you can listen to in order to handle specific actions or errors. Here's an example of how to listen to events:

```javascript
import { codexSDK } from '@cod3x/sdk';

const codexSDK = new CodexSDK();

codexSDK.on('accountCreated', (account) => {
  console.log(`Account created: ${account}`);
});

codexSDK.on('transactionSigned', (signedTransaction) => {
  console.log(`Transaction signed: ${signedTransaction}`);
});

codexSDK.on('messageSigned', (signedMessage) => {
  console.log(`Message signed: ${signedMessage}`);
});

codexSDK.on('typedDataSigned', (signedTypedData) => {
  console.log(`Typed data signed: ${signedTypedData}`);
});

codexSDK.on('transactionSent', (transactionHash) => {
  console.log(`Transaction sent: ${transactionHash}`);
});

codexSDK.on('chainsFetched', (chains) => {
  console.log(`Chains fetched: ${JSON.stringify(chains)}`);
});

codexSDK.on('chainFetched', (chain) => {
  console.log(`Chain fetched: ${JSON.stringify(chain)}`);
});

codexSDK.on('error', (error) => {
  console.error(`An error occurred: ${error.message}`);
});
```

The available events are:

* `accountCreated`: Emitted when a new account is created.
* `transactionSigned`: Emitted when a transaction is signed.
* `messageSigned`: Emitted when a message is signed.
* `typedDataSigned`: Emitted when typed data is signed.
* `transactionSent`: Emitted when a transaction is sent.
* `chainsFetched`: Emitted when the list of supported chains is fetched.
* `chainFetched`: Emitted when a specific chain is fetched.
* `error`: Emitted when an error occurs.

### API Reference

#### codexSDK Class

**Constructor**

```javascript
new codexSDK(config?: CodexSDKConfig)
```

* `config` (optional): Configuration object for the SDK.
  * `apiKey` (string): Your API key for authentication.
  * `authInstance` (SupabaseClient): An existing Supabase client instance for authentication.
  * `httpParams` (ApiConfig): Configuration for the HTTP client.
  * `httpInstance` (HttpClient): An existing HttpClient instance.
  * clientId (string): codex oauth2 client id param

**Methods**

*   `connect(accessToken?: string, refreshToken?: string)`: Establishes a connection to the codex API.

    ```javascript
    await codexSDK.connect('access-token', 'refresh-token');
    ```
*   `disconnect()`: Disconnects from the codex API.

    ```javascript
    await codexSDK.disconnect();
    ```
*   `getcodexAuth()`: Returns the Supabase client instance for authentication.

    ```javascript
    const authClient = codexSDK.getCodexAuth();
    ```
*   `getUserSession()`: Returns the current user session.

    ```javascript
    const session = await codexSDK.getUserSession();
    ```
*   `getSolanaSDK()`: Returns the Solana SDK instance.

    ```javascript
    const solanaSDK = codexSDK.getSolanaSDK();
    ```
*   `getBitcoinSDK()`: Returns the Bitcoin SDK instance.

    ```javascript
    const bitcoinSDK = codexSDK.getBitcoinSDK();
    ```
*   `getCosmosSDK()`: Returns the Cosmos SDK instance.

    ```javascript
    const cosmosSDK = codexSDK.getCosmosSDK();
    ```
*   `getEosSDK()`: Returns the EOS SDK instance.

    ```javascript
    const eosSDK = codexSDK.getEosSDK();
    ```
*   `getLitecoinSDK()`: Returns the Litecoin SDK instance.

    ```javascript
    const litecoinSDK = codexSDK.getLitecoinSDK();
    ```
*   `getRippleSDK()`: Returns the Ripple SDK instance.

    ```javascript
    const rippleSDK = codexSDK.getRippleSDK();
    ```
*   `getTronSDK()`: Returns the Tron SDK instance.

    ```javascript
    const tronSDK = codexSDK.getTronSDK();
    ```
*   `getBitcoincashSDK()`: Returns the Bitcoincash SDK instance.

    ```javascript
    const bitcoincashSDK = codexSDK.getBitcoincashSDK();
    ```
*   `getDogecoinSDK()`: Returns the Dogecoin SDK instance.

    ```javascript
    const dogecoinSDK = codexSDK.getDogecoinSDK();
    ```
*   `getAccountsSDK()`: Returns the Accounts SDK instance.

    ```javascript
    const accountsSDK = codexSDK.getAccountsSDK();
    ```
*   `getAaveSDK()`: Returns the Aave SDK instance.

    ```javascript
    const aaveSDK = codexSDK.getAaveSDK();
    ```
*   `getConveyorfinanceSDK()`: Returns the Conveyorfinance SDK instance.

    ```javascript
    const conveyorfinanceSDK = codexSDK.getConveyorfinanceSDK();
    ```
*   `getENSSDK()`: Returns the ENS SDK instance.

    ```javascript
    const ensSDK = codexSDK.getENSSDK();
    ```
*   `getErc20SDK()`: Returns the ERC-20 SDK instance.

    ```javascript
    const erc20SDK = codexSDK.getErc20SDK();
    ```
*   `getErc1155SDK()`: Returns the ERC-1155 SDK instance.

    ```javascript
    const erc1155SDK = codexSDK.getErc1155SDK();
    ```
*   `getErc721SDK()`: Returns the ERC-721 SDK instance.

    ```javascript
    const erc721SDK = codexSDK.getErc721SDK();
    ```
*   `getOneinchSDK()`: Returns the 1inch SDK instance.

    ```javascript
    const oneinchSDK = codexSDK.getOneinchSDK();
    ```
*   `getUniswapSDK()`: Returns the Uniswap SDK instance.

    ```javascript
    const uniswapSDK = codexSDK.getUniswapSDK();
    ```
*   `getYearnSDK()`: Returns the Yearn SDK instance.

    ```javascript
    const yearnSDK = codexSDK.getYearnSDK();
    ```
*   `listAccounts()`: Lists all available accounts.

    ```javascript
    const accounts = await codexSDK.listAccounts();
    ```
*   `createAccount()`: Creates a new account.

    ```javascript
    const newAccount = await codexSDK.createAccount();
    ```
*   `SignTransaction(wallet: string, transaction: InputBody)`: Signs a transaction.

    ```javascript
    const signedTx = await codexSDK.SignTransaction(wallet, transaction);
    ```
*   `SignMessage(wallet: string, message: BytesLike)`: Signs a message.

    ```javascript
    const signedMessage = await codexSDK.SignMessage(wallet, message);
    ```
*   `SignTypedData(wallet: string, domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, value: Record<string, string>)`: Signs typed data.

    ```javascript
    const signedTypedData = await codexSDK.SignTypedData(wallet, domain, types, value);
    ```
*   `SendTransaction(wallet: string, rawTransaction: string, chain_id: string)`: Broadcasts a transaction.

    ```javascript
    const txHash = await codexSDK.SendTransaction(wallet, signedTx, chain_id);
    ```
*   `getChains()`: Retrieves a list of supported chains.

    ```javascript
    const chains = await codexSDK.getChains();
    ```
*   `getChainById(id: string)`: Retrieves a chain by its ID.

    ```javascript
    const chain = await codexSDK.getChainById('chain-id');
    ```



### Authentication Methods

The codex SDK supports various authentication methods to provide secure access to the blockchain functionalities. The following authentication methods are available:

### Usage

Here's a basic example of how to use the SDK:

```javascript
import { codexSDK } from '@cod3x/sdk';

const codexSDK = new CodexSDK({ clientId: 'your-client-id' });

// Discord OAuth
await codexSDK.performDiscordOAuth();
// After obtaining the authorization code, exchange it for an access token and refresh token
const discordToken = await codexSDK.performDiscordOauthCodeExchange(code);

// GitHub OAuth
await codexSDK.performGithubOAuth();
// After obtaining the authorization code, exchange it for an access token and refresh token
const githubToken = await codexSDK.performGithubOauthCodeExchange(code);

// Google OAuth
await codexSDK.performGoogleOAuth();
// After obtaining the authorization code, exchange it for an access token and refresh token
const googleToken = await codexSDK.performGoogleOauthCodeExchange(code);

// Twitter OAuth
await codexSDK.performTwitterOauth();
// After obtaining the authorization code, exchange it for an access token and refresh token
const twitterToken = await codexSDK.performTwitterOauthCodeExchange(code);

// Magic Link
await codexSDK.sendMagicLink(email, redirectTo);

// Email and Password
await codexSDK.signUp(email, password);
await codexSDK.signInWithPassword(email, password);

// Phone and Password
await codexSDK.signInWithPhone(phone, password);

// Passkey
const passkeyOptions = await codexSDK.handlePassKeyLogin(email);
// Use the passkeyOptions to authenticate the user using their passkey
const passkeyResponse = await codexSDK.handlePasskeyLoginVerify(email, credential);

// SIWE (Sign-In with Ethereum)
const nonce = await codexSDK.getSIWENonce(address);
// Sign the SIWE message using the Ethereum wallet
const siweResponse = await codexSDK.verifySIWESignature(address, signedMessage, nonce, message);

// Embedded Account
const session = await codexSDK.embeddedAccount(email, uuid, domain);
```

#### Discord OAuth

To authenticate using Discord OAuth, follow these steps:

1.  Initiate the Discord OAuth flow:

    ```javascript
    await codexSDK.performDiscordOAuth();
    ```
2. After the user is redirected to the Discord authorization page, obtain the authorization code from the URL.
3.  Exchange the authorization code for an access token and refresh token:

    ```javascript
    const token = await codexSDK.performDiscordOauthCodeExchange(code);
    ```

#### GitHub OAuth

To authenticate using GitHub OAuth, follow these steps:

1.  Initiate the GitHub OAuth flow:

    ```javascript
    await codexSDK.performGithubOAuth();
    ```
2. After the user is redirected to the GitHub authorization page, obtain the authorization code from the URL.
3.  Exchange the authorization code for an access token and refresh token:

    ```javascript
    const token = await codexSDK.performGithubOauthCodeExchange(code);
    ```

#### Google OAuth

To authenticate using Google OAuth, follow these steps:

1.  Initiate the Google OAuth flow:

    ```javascript
    await codexSDK.performGoogleOAuth();
    ```
2. After the user is redirected to the Google authorization page, obtain the authorization code from the URL.
3.  Exchange the authorization code for an access token and refresh token:

    ```javascript
    const token = await codexSDK.performGoogleOauthCodeExchange(code);
    ```

#### Twitter OAuth

To authenticate using Twitter OAuth, follow these steps:

1.  Initiate the Twitter OAuth flow:

    ```javascript
    await codexSDK.performTwitterOauth();
    ```
2. After the user is redirected to the Twitter authorization page, obtain the authorization code from the URL.
3.  Exchange the authorization code for an access token and refresh token:

    ```javascript
    const token = await codexSDK.performTwitterOauthCodeExchange(code);
    ```

#### Magic Link

To authenticate using a magic link, follow these steps:

1.  Send a magic link to the user's email address:

    ```javascript
    await codexSDK.sendMagicLink(email, redirectTo);
    ```
2. The user will receive an email with a magic link. After clicking the link, they will be redirected to the specified `redirectTo` URL.

#### Email and Password

To authenticate using email and password, follow these steps:

1.  Create a new user account:

    ```javascript
    await codexSDK.signUp(email, password);
    ```
2.  Sign in with the created account:

    ```javascript
    await codexSDK.signInWithPassword(email, password);
    ```

#### Phone and Password

To authenticate using phone and password, follow these steps:

1.  Sign in with the phone number and password:

    ```javascript
    await codexSDK.signInWithPhone(phone, password);
    ```

#### Passkey

To authenticate using a passkey, follow these steps:

1.  Initiate the passkey login flow:

    ```javascript
    const options = await codexSDK.handlePassKeyLogin(email);
    ```
2. Use the `options` to authenticate the user using their passkey.
3.  Verify the passkey login credentials:

    ```javascript
    const response = await codexSDK.handlePasskeyLoginVerify(email, credential);
    ```

#### SIWE (Sign-In with Ethereum)

To authenticate using SIWE, follow these steps:

1.  Retrieve a nonce for the Ethereum address:

    ```javascript
    const nonce = await codexSDK.getSIWENonce(address);
    ```
2. Sign the SIWE message using the Ethereum wallet.
3.  Verify the SIWE signature:

    ```javascript
    const response = await codexSDK.verifySIWESignature(address, signedMessage, nonce, message);
    ```

#### Embedded Account

To create an embedded account, follow these steps:

1.  Create an embedded account for the specified email address, UUID, and domain:

    ```javascript
    const session = await codexSDK.embeddedAccount(email, uuid, domain);
    ```


## Contributing

We welcome contributions to the @cod3x/sdk package! Here's how you can help:

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

By contributing to @cod3x/sdk, you agree that your contributions will be licensed under its MIT License.

Thank you for your interest in improving @cod3x/sdk!
