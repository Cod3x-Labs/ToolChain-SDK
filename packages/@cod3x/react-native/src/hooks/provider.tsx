import { CodexProvider } from '@cod3x/ethers';

import { useCodex } from '../contexts';

const createCodexProviderHook = <T extends keyof CodexProvider>(method: T) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    const { ethers } = useCodex();
    // null check
    if (ethers === null) {
      return null;
    }
    if (typeof ethers[method] === 'function') {
      // Use type assertion to specify the type of moonProvider[method]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (ethers[method] as (...args: any[]) => any)(...args);
    }
    return null;
  };
};

export const useCodexProviderConnect = () => {
  const { connectEthers } = useCodex();
  return connectEthers;
};

export const useCodexProviderDisconnect = () => {
  const { disconnect } = useCodex();
  return disconnect;
};

export const useCodexProviderRequest = createCodexProviderHook('request');
export const useCodexProviderGetChainId = createCodexProviderHook('getChainId');
export const useCodexProviderGetSigner = createCodexProviderHook('getSigner');
export const useCodexProviderGetNetwork = createCodexProviderHook('getNetwork');
export const useCodexProviderGetBlockNumber =
  createCodexProviderHook('getBlockNumber');
export const useCodexProviderGetGasPrice =
  createCodexProviderHook('getGasPrice');
export const useCodexProviderGetBalance = createCodexProviderHook('getBalance');
export const useCodexProviderGetTransactionCount = createCodexProviderHook(
  'getTransactionCount'
);
export const useCodexProviderGetCode = createCodexProviderHook('getCode');
export const useCodexProviderGetStorageAt =
  createCodexProviderHook('getStorageAt');
export const useCodexProviderSendTransaction =
  createCodexProviderHook('sendTransaction');
export const useCodexProviderCall = createCodexProviderHook('call');
export const useCodexProviderEstimateGas =
  createCodexProviderHook('estimateGas');
export const useCodexProviderGetBlock = createCodexProviderHook('getBlock');
export const useCodexProviderGetBlockWithTransactions = createCodexProviderHook(
  'getBlockWithTransactions'
);
export const useCodexProviderGetTransaction =
  createCodexProviderHook('getTransaction');
export const useCodexProviderGetTransactionReceipt = createCodexProviderHook(
  'getTransactionReceipt'
);
export const useCodexProviderGetLogs = createCodexProviderHook('getLogs');
export const useCodexProviderResolveName =
  createCodexProviderHook('resolveName');
export const useCodexProviderLookupAddress =
  createCodexProviderHook('lookupAddress');
