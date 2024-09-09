import { CodexProvider, CodexProviderOptions } from '@cod3x/ethers';
import { CodexSDK } from '@cod3x/sdk';
import { useEffect, useState } from 'react';
import { CodexEthersHook } from './types';

export function useCodexEthers(): CodexEthersHook {
  const [moonProvider, setCodexProvider] = useState<CodexProvider | null>(null);
  const [moon, setCodex] = useState<CodexSDK | null>(null);
  const initialize = async () => {
    const moonInstance = new CodexSDK();
    setCodex(moonInstance);
    moonInstance.connect();
    const options: CodexProviderOptions = {
      chainId: 1,
      address: '0x',
      SDK: moonInstance,
    };
    const moonProviderInstance = new CodexProvider(options);
    setCodexProvider(moonProviderInstance);
  };

  const disconnect = async () => {
    if (moonProvider) {
      await moonProvider.disconnect();
      setCodexProvider(null);
    }
    if (moon) {
      await moon.disconnect();
      setCodex(null);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return {
    moonProvider,
    moon,
    initialize,
    disconnect,
    // Add other methods as needed
  };
}
