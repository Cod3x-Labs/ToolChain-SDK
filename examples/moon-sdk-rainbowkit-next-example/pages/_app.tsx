'use client';
import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css';

// import { RainbowMoonProvider } from '@moonup/moon-rainbowkit';
import { useMoonSDK } from '@moonup/moon-react';
import {
  createAuthenticationAdapter,
  getDefaultConfig,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import React, { useEffect, useMemo, useState } from 'react';
import { SiweMessage } from 'siwe';
import { useAccount, WagmiProvider } from 'wagmi';
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowMoonProvider>
          <RainbowKitProvider>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </RainbowMoonProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
