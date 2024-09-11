import { CodexSDK } from '@cod3x/sdk';
import { useCodexSDK } from '../context';

// import { useCodex } from '../contexts';

const createCodexHook = <T extends keyof CodexSDK>(method: T) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    const { moon } = useCodexSDK();
    // null check
    if (moon === null) {
      return null;
    }
    if (typeof moon[method] === 'function') {
      // Use type assertion to specify the type of moon[method]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (moon[method] as (...args: any[]) => any)(...args);
    }
    return null;
  };
};

export const useCodexConnect = () => {
  const { connect } = useCodexSDK();
  return connect;
};

export const useCodexDisconnect = () => {
  const { disconnect } = useCodexSDK();
  return disconnect;
};

export const useUserSession = () => {
  const { getUserSession } = useCodexSDK();
  return getUserSession;
};

export const useSolanaSDK = createCodexHook('getSolanaSDK');
export const useBitcoinSDK = createCodexHook('getBitcoinSDK');
export const useCosmosSDK = createCodexHook('getCosmosSDK');
export const useEosSDK = createCodexHook('getEosSDK');
export const useLitecoinSDK = createCodexHook('getLitecoinSDK');
export const useRippleSDK = createCodexHook('getRippleSDK');
export const useTronSDK = createCodexHook('getTronSDK');
export const useBitcoincashSDK = createCodexHook('getBitcoincashSDK');
export const useDogecoinSDK = createCodexHook('getDogecoinSDK');
export const useAccountsSDK = createCodexHook('getAccountsSDK');

export const useENSSDK = createCodexHook('getENSSDK');
export const useErc20SDK = createCodexHook('getErc20SDK');
export const useErc1155SDK = createCodexHook('getErc1155SDK');
export const useErc721SDK = createCodexHook('getErc721SDK');

export const useErc4626SDK = createCodexHook('getErc4626SDK');
export const useLendingPoolSDK = createCodexHook('getLendingPoolSDK');
export const useLeveragerSDK = createCodexHook('getLeveragerSDK');
export const useLifiSDK = createCodexHook('getLifiSDK');
export const useOdosSDK = createCodexHook('getOdosSDK');
export const useOnramperSDK = createCodexHook('getOnramperSDK');
export const useThorswapSDK = createCodexHook('getThorswapSDK');
