# Codex Packages

# authentication

## oauth2
You can authenticate cod3x with either oauth2 or siwe.

### redirect 
```typescript
function LoginButton() {
  const handleClick = () => {
    const response_type = process.env.REACT_APP_RESPONSE_TYPE;
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
    const scope = process.env.REACT_APP_SCOPE;
    const state = process.env.REACT_APP_STATE;

    const redirectUrl = `https://dash.usemoon.ai/authorize?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`;

    window.location.href = redirectUrl;
  };

  return <button onClick={handleClick}>Login with Codex</button>;
}

export default LoginButton;

```

### callback
```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCodexSDK } from '../hooks/codex';

function OAuth2Callback() {
  const location = useLocation();
  const { codex } = useCodexSDK();

  useEffect(() => {
    async function fetchData() {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await fetch(`http://localhost:4000/callback?code=${code}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          console.log(data);
          codex?.setAccessToken(data.access_token, data.refresh_token);
        } catch (error) {
          // Handle the error here
          console.error(error);
        }
      }
    }

    fetchData();
  }, [location]);

  return <div>Processing OAuth2 callback...</div>;
}

export default OAuth2Callback;

```
### token exchange + set session
```typescript
app.get('/callback', async (req: Request, res: Response) => {
  try {
    const { code, state } = req.query;
    console.log(process.env.REACT_APP_CLIENT_GRANT_TYPE);
    const response = await axios.post(
      'https://dash.usemoon.ai/api/oauth2/exchange',
      {
        grant_type: process.env.REACT_APP_GRANT_TYPE,
        code: code,
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    res.cookie('sb-api-auth-token', response.data);

    res.json(response.data);
  } catch (e: any) {
    console.log(e);
    return res.status(500).json({
      error: 'Server error. Try again with a different prompt.',
      success: false,
    });
  }
});
```

## siwe 
```typescript
import { signMessage } from '@wagmi/core';
import { SiweMessage } from 'siwe';

import { useAccount } from 'wagmi';
const CodexSIWE = async (addres) => {
    const userAddress = address ? address : '';

    try {
        // 1. Get a nonce from the server
        const nonceResponse = await fetch(`https://dash.usemoon.ai/api/ethereum/nonce`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                address: userAddress,
            }),
        });

        const {
            user: [user],
        } = await nonceResponse.json();

        // 2. Ask the user to sign a message
        const message = new SiweMessage({
            domain: window.location.host,
            address: address,
            statement: 'Sign in with Ethereum to the app.',
            uri: window.location.origin,
            version: '1',
            chainId: 1,
            nonce: user.auth.genNonce,
        });
        const signedMessage = await signMessage({
            message: message.prepareMessage(),
        });

        // // 3. Send the signed message to our API
        const response = await fetch(`https://dash.usemoon.ai/api/ethereum/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                address: userAddress,
                signedMessage: signedMessage,
                nonce: user.auth.genNonce,
                message: message.prepareMessage(),
            }),
        }).then((res) => res.json());

        if (response.ok) {
        // The verification was successful
        moon.setAccessToken(data.access_token, data.refresh_token);
        console.log('Verification successful!');
        } else {
        // The verification failed
        console.error('Verification failed!');
        }
    } catch (err) {
        console.error('An error occurred:', err);
    }
}
```



# @cod3x Codex Packages


## Usage
Packages are published to npm under the @cod3x scope. To install a package, run:
```bash
npm install @cod3x/<package-name>
```

## @cod3x/sdk:
Core entry point which will handle everything from jwt token storage to network changes etc, as well as sub class initialisation
### usage
Install the package
```bash
npm install @cod3x/sdk
```
import the sdk
```typescript
import { CodexSDK } from '@cod3x/sdk'
const sdk = new CodexSDK()
const account = "";
const abi = [];
const contract = new ethers.Contract("", abi);
const data = contract.methods['deposit'](params1, param2).encodeABI();
    const raw_tx = await sdk 
      .getAccountsSDK()
      .signTransaction(acccount, {
        to: '0x8b57148723f938235afabdb8b070c78f9ccea6b0',
        data: data
        gasPrice: '1000000000',
        gas: '200000',
        nonce: '0',
        chain_id: '1891',
        encoding: 'utf-8',
        value: '0',
      })
```

## @cod3x/api: 
Codex API client

### usage
Install the package
```bash
npm install @cod3x/api
```

import the client
```typescript
import { Accounts, ContentType } from '@cod3x/api'
const baseApiParams: ApiConfig = {
    baseUrl:
    'https://vault-api-git-ew-supabase-migration-moonup.vercel.app',
    baseApiParams: {
        secure: true,
        type: ContentType.Json,
        format: 'json',
    }
},
// eslint-disable-next-line @typescript-eslint/no-explicit-any
securityWorker: async (securityData: any) => {
    return Promise.resolve({
        headers: {
            Authorization: `Bearer ${securityData.token}`,
        },
    });
    },
};
const accounts = new Accounts(baseApiParams);
accounts..setSecurityData({
    token: token,
});
const newAccount = await accounts.createAccount({})
const accounts = await accounts.listAccounts()
```

## @cod3x/ethers: 
ethers.js provider and signer classes
### usage
Install the package
```bash
npm install @cod3x/ethers
```
import the provider
```typescript
import {CodexSDK} from '@cod3x/sdk'
import { CodexProvider, CodexSigner } from '@cod3x/ethers'
const sdk = new CodexSDK()
const config: CodexProviderOptions = {
    chainId: 80001 
    SDK: sdk;
    address: '';
}
// ethers.js jsonrpcprovider
const provider = new CodexProvider(config)
provider.updateConfig({
    chainId: 80001,
    address: '0x000',
})
// can also override window.ethereum with the provider so no interactions with metamask
window.ethereum = provider;

// ethers.js signer
const signer = new CodexSigner(config)
const tx = await signer.signTransaction({
    to: '0x000',
    value: '0x000',
    data: '0x000',
    gasLimit: '0x000',
    gasPrice: '0x000',
    nonce: '0x000',
    chainId: 80001,
})
```


## @cod3x/wagmi-connector:
Wagmi connector
### usage
Install the package
```bash
npm install @cod3x/wagmi-connector
```
import the provider
```typescript
import {CodexConnector } from '@cod3x/wagmi-connector'
import {CodexSDK } from '@cod3x/sdk'
const sdk = new CodexSDK()

const connector = new CodexConnector({
    chainId: 80001,
    sdk: sdk,
    address: '0x000',
})
```

## @cod3x/rainbowkit
Rainbow kit library
### usage
Install the package
```bash
npm install @cod3x/rainbowkit
```

import the provider
```typescript
import {RainbowKitUseCodexProvider} from '@cod3x/rainbowkit';
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


## @cod3x/viem
Viem library
### usage
Install the package
```bash
npm install @cod3x/viem
```
import the provider
```typescript
import { CodexSDK } from '@cod3x/sdk'
import { createAccount } from '@cod3x/viem'
const sdk = new CodexSDK()
const config = {
    SDK: sdk,
    ethereumAddress: '0x000',
}
const viem = createAccount(config)
const account = await viem.getAccount()
```

## @cod3x/react
React components
### usage
Install the package
```bash
npm install @cod3x/react
```

