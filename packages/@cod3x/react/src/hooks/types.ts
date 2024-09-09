import { CodexProvider } from '@cod3x/ethers';
import { CodexSDK } from '@cod3x/sdk';
import { ethers } from 'ethers';

export interface CodexSDKHook {
  moon: CodexSDK | null;
  initialize: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export interface CodexEthersHook {
  moonProvider: CodexProvider | null;
  moon: CodexSDK | null;
  initialize: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export interface Transaction {
  from?: string;
  nonce?: ethers.BigNumberish;
  gasLimit?: ethers.BigNumberish;
  gasPrice?: ethers.BigNumberish;
}

export interface CodexSkaleEthersHook {
  moonProvider: CodexProvider | null;
  moon: CodexSDK | null;
  initialize: () => Promise<void>;
  disconnect: () => Promise<void>;
  mineForGas: (contractAddress: string, address: string) => Promise<string>;
}
