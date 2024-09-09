import { CodexSDK } from '@cod3x/sdk';
import { useEffect, useState } from 'react';

export const useCodex = () => {
  const [moon, setCodex] = useState<CodexSDK | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const sdk = new CodexSDK();
    setCodex(sdk);
    setIsAuthenticated(sdk.isAuthenticated);
  }, []);

  return { moon, isAuthenticated };
};
