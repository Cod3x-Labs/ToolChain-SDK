import { CodexSDK } from '@cod3x/sdk';
export interface CodexProviderOptions {
  chainId: number;
  SDK: CodexSDK;
  address?: string;
}

export interface ProviderRpcError extends Error {
  code: number;
  data?: unknown;
}
