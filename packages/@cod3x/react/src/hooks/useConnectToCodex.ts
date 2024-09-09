import { SiweMessage } from 'siwe';
import { useCodexSDK } from '../context';

interface ConnectToCodexProps {
  address: string;
  signMessageAsync: any;
}

export const useConnectToCodex = ({
  address,
  signMessageAsync,
}: ConnectToCodexProps) => {
  const { supabase } = useCodexSDK();

  const connectToCodexSiwe = async () => {
    if (!address) return;

    try {
      const nonceResponse = await fetch(
        'https://beta.usemoon.ai/auth/ethereum/nonce',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ address }),
        }
      );

      const { user } = await nonceResponse.json();
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: 1,
        nonce: user.at(0).auth.genNonce,
      });
      const signedMessage = await signMessageAsync({
        message: message.prepareMessage(),
      });

      const response = await fetch(
        'https://beta.usemoon.ai/auth/ethereum/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            address,
            signedMessage,
            nonce: user.at(0).auth.genNonce,
            message: message.prepareMessage(),
          }),
        }
      ).then((res) => res.json());

      console.log('response', response);

      await supabase?.auth.setSession({
        access_token: response.token.access_token,
        refresh_token: response.token.refresh_token,
      });
    } catch (err) {
      console.error('An error occurred:', err);
    }
  };

  return { connectToCodexSiwe };
};
