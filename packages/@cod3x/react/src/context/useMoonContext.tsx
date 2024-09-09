import { useContext } from 'react';
import { CodexSDKContext, State } from './Context';

export const useCodexSDK = (): State => {
  const context = useContext(CodexSDKContext);
  if (context === undefined) {
    throw new Error('useCodexSDK must be used within a MoonSDKProvider');
  }
  return context;
};
