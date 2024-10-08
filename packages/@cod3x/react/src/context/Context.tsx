import React, { createContext, ReactNode, useEffect, useReducer } from 'react';

import { CodexProvider } from '@cod3x/ethers';
import { CodexSDK } from '@cod3x/sdk';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  coinbaseWallet,
  injectedWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { announceProvider, EIP1193Provider, Store } from 'mipd';
import { createConfig, custom, WagmiProvider } from 'wagmi';
import { mainnet, mode, optimism, polygon, sepolia } from 'wagmi/chains';
import '../index.css';

import { Chains } from '@cod3x/sdk';
import { createStore } from 'mipd';
import AuthModal from '../components/AuthModal/AuthModal';
import { DEFAULT_AUTH_CONFIG } from '../constants';
import { AuthModalConfig } from '../types';
const walletsRainbowkit = [
  injectedWallet,
  coinbaseWallet,
  rainbowWallet,
  walletConnectWallet,
  safeWallet,
];

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: walletsRainbowkit,
    },
  ],
  {
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
  }
);
export type State = {
  moon: CodexSDK | null;
  authConfig: AuthModalConfig;
  session: Session | null;
  supabase: SupabaseClient | null;
  wallets: string[];
  chains: Chains[];
  ethers?: CodexProvider | null;
  loading: boolean;
  wallet?: string;
  signOut: () => Promise<void>;
  createWallet: () => Promise<void>;
  listWallets: () => Promise<void>;
  setWallet: (wallet: string) => Promise<void>;
  store: Store;
  connect: (accessToken?: string, refreshToken?: string) => Promise<void>;
  disconnect: () => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUserSession: () => Promise<any>;
  connectEthers: () => Promise<void>;
  disconnectEthers: () => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request: (args: any) => Promise<any>;
  getChains: () => Promise<void>;
};

type Action =
  | { type: 'SET_MOON'; moon: CodexSDK }
  | { type: 'SET_SESSION'; session: Session | null }
  | { type: 'SET_SUPABASE'; supabase: SupabaseClient }
  | { type: 'SET_WALLETS'; wallets: string[] }
  | { type: 'SET_ETHERS'; ethers: CodexProvider | null }
  | { type: 'SET_LOADING'; loading: boolean }
  | { type: 'SET_WALLET'; wallet: string }
  | { type: 'SET_CHAINS'; chains: Chains[] }
  | { type: 'SET_STORE'; store: Store };

// Define the reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_MOON':
      return { ...state, moon: action.moon };
    case 'SET_SESSION':
      return { ...state, session: action.session };
    case 'SET_SUPABASE':
      return { ...state, supabase: action.supabase };
    case 'SET_WALLETS':
      return { ...state, wallets: action.wallets };
    case 'SET_ETHERS':
      return { ...state, ethers: action.ethers };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_WALLET':
      return { ...state, wallet: action.wallet };
    case 'SET_STORE':
      return { ...state, store: action.store };
    case 'SET_CHAINS':
      return { ...state, chains: action.chains };
    default:
      return state;
  }
}
const supabase = createClient(
  'https://api.usemoon.ai',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzAzMTE2ODAwLAogICJleHAiOiAxODYwOTY5NjAwCn0.nA4p2oP7XNlo93VqnyOlwz_wy7pDXW3lUki1t_udpbA'
);
const moon = new CodexSDK({
  authInstance: supabase,
});
const provider = new CodexProvider({
  SDK: moon,
  chainId: 1,
  address: '0x',
});
window.moon = provider;

// Define the context
export const CodexSDKContext = createContext<State | undefined>(undefined);
// ...
const config = createConfig({
  chains: [mainnet, optimism, polygon, mode, sepolia],
  connectors: connectors,
  transports: {
    [mainnet.id]: custom(provider),
    [optimism.id]: custom(provider),
    [polygon.id]: custom(provider),
    [mode.id]: custom(provider),
    [sepolia.id]: custom(provider),
  },
});
declare global {
  interface Window {
    moon: CodexProvider;
  }
}

const store = createStore();

type CodexSDKProviderProps = {
  authConfig?: AuthModalConfig;
  children: ReactNode;
};

export const CodexSDKProvider: React.FC<CodexSDKProviderProps> = ({
  children,
  authConfig = DEFAULT_AUTH_CONFIG,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    moon: moon,
    authConfig: authConfig,
    loading: true, // Add a loading state
    session: null,
    supabase: supabase,
    wallets: [],
    chains: [],
    wallet: '',
    ethers: provider,
    store: store,
    connect: async (accessToken?: string, refreshToken?: string) => {
      if (state.moon) {
        await state.moon.connect(accessToken, refreshToken);
      }
    },
    disconnect: async () => {
      if (state.moon) {
        await state.moon.disconnect();
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getUserSession: async (): Promise<any> => {
      if (state.supabase) {
        const { data, error } = await state.supabase.auth.getSession();
        return { data, error };
      }
    },
    connectEthers: async () => {
      if (state.ethers) {
        await state.ethers.connect();
      }
    },
    disconnectEthers: async () => {
      if (state.ethers) {
        await state.ethers.disconnect();
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request: async (args: any): Promise<any> => {
      if (state.ethers) {
        return await state.ethers.request(args);
      }
      return null;
    },

    signOut: async () => {
      console.log('signOut');
      console.log('state', state);
      if (state.supabase) {
        const { error } = await state.supabase.auth.signOut();
        if (error) {
          console.error('An error occurred:', error);
        }
      }
    },
    createWallet: async () => {
      if (state.moon) {
        const wallet = await state.moon.createAccount();
        dispatch({ type: 'SET_WALLETS', wallets: [...state.wallets, wallet] });
      }
    },
    listWallets: async () => {
      console.log('accounts');
      console.log('state', state);
      const accounts = await state.moon?.listAccounts();
      console.log('accounts', accounts);
      dispatch({
        type: 'SET_WALLETS',
        wallets: [...state.wallets, ...(accounts || [])],
      });
    },
    setWallet: async (wallet: string) => {
      console.log('state', state);
      if (!state.moon) {
        return;
      }

      state.ethers?.updateConfig({
        SDK: state.moon,
        chainId: 1,
        address: wallet,
      });
      dispatch({ type: 'SET_WALLET', wallet });
    },
    getChains: async () => {
      console.log('getChains');
      const chains = await state.moon?.getChains();
      console.log('chains', chains);
      dispatch({
        type: 'SET_CHAINS',
        chains: [...state.chains, ...(chains || [])],
      });
    },
  });

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session: Session | null) => {
      switch (_event) {
        case 'INITIAL_SESSION':
        case 'SIGNED_IN':
        case 'TOKEN_REFRESHED':
          console.log('SIGNED_IN');
          dispatch({ type: 'SET_SESSION', session });
          break;

        case 'SIGNED_OUT':
          console.log('SIGNED_OUT');
          dispatch({ type: 'SET_SESSION', session: null });
          dispatch({ type: 'SET_WALLETS', wallets: [] });
          break;
      }
    });
    announceProvider({
      info: {
        icon: 'data:image/svg+xml,<svg width="32px" height="32px" viewBox="0 0 32 32"/>',
        name: 'Codex',
        rdns: 'ai.usemoon',
        uuid: '00000000-0000-0000-0000-000000000000',
      },
      provider: provider as EIP1193Provider,
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  const queryClient = useQueryClient(new QueryClient());

  return (
    <CodexSDKContext.Provider value={state}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <AuthModal config={authConfig}>{children}</AuthModal>
        </QueryClientProvider>
      </WagmiProvider>
    </CodexSDKContext.Provider>
  );
};
