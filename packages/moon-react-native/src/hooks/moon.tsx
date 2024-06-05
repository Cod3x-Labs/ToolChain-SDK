import { MoonSDK } from '@moonup/moon-sdk';

import { useMoon } from '../contexts';

const createMoonHook = <T extends keyof MoonSDK>(method: T) => {
  return (...args: any[]) => {
    const { moon } = useMoon();
    // null check
    if (moon === null) {
      return null;
    }
    if (typeof moon[method] === 'function') {
      // Use type assertion to specify the type of moon[method]
      return (moon[method] as (...args: any[]) => any)(...args);
    }
    return null;
  };
};

export const useMoonConnect = () => {
  const { connect } = useMoon();
  return connect;
};

export const useMoonDisconnect = () => {
  const { disconnect } = useMoon();
  return disconnect;
};

export const useUserSession = () => {
  const { getUserSession } = useMoon();
  return getUserSession;
};

export const useSolanaSDK = createMoonHook('getSolanaSDK');
export const useBitcoinSDK = createMoonHook('getBitcoinSDK');
export const useCosmosSDK = createMoonHook('getCosmosSDK');
export const useEosSDK = createMoonHook('getEosSDK');
export const useLitecoinSDK = createMoonHook('getLitecoinSDK');
export const useRippleSDK = createMoonHook('getRippleSDK');
export const useTronSDK = createMoonHook('getTronSDK');
export const useBitcoincashSDK = createMoonHook('getBitcoincashSDK');
export const useDogecoinSDK = createMoonHook('getDogecoinSDK');
export const useAccountsSDK = createMoonHook('getAccountsSDK');
export const useAaveSDK = createMoonHook('getAaveSDK');
export const useConveyorfinanceSDK = createMoonHook('getConveyorfinanceSDK');
export const useENSSDK = createMoonHook('getENSSDK');
export const useErc20SDK = createMoonHook('getErc20SDK');
export const useErc1155SDK = createMoonHook('getErc1155SDK');
export const useErc721SDK = createMoonHook('getErc721SDK');
export const useOneinchSDK = createMoonHook('getOneinchSDK');
export const useUniswapSDK = createMoonHook('getUniswapSDK');
export const useYearnSDK = createMoonHook('getYearnSDK');
