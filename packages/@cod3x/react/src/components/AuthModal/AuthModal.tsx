import React, { useState } from 'react';
import { useCodexSDK } from '../../context';
import { AuthModalConfig } from '../../types';
import AuthOptions from '../AuthOptions/AuthOptions';
import { ModalContent, ModalOverlay } from '../Modal/Modal';
import WalletConnectorsList from '../WalletConnectorList/WalletConnectorList';

type AuthModalProps = {
  children: React.ReactNode;
  config: AuthModalConfig;
};

const AuthModal: React.FC<AuthModalProps> = ({ config, children }) => {
  const { enabled, appearance } = config;
  const [connectWallet, setConnectWallet] = useState(false);
  const { session } = useCodexSDK();

  if (!enabled) return <>{children}</>;
  if (session) return <>{children}</>;

  let logoPosition = 'left-8';
  if (appearance.logo?.position == 'center')
    logoPosition = 'left-[50%] transform -translate-x-1/2';
  else if (appearance.logo?.position == 'right') logoPosition = 'right-8';

  return (
    <>
      <ModalOverlay onClick={() => {}} config={config} />
      <ModalContent config={config}>
        {config.appearance.logo?.enabled && (
          <img
            src={config.appearance.logo?.src}
            alt="logo"
            width={config.appearance.logo?.width}
            height={config.appearance.logo?.height}
            className={`fixed top-8 ${logoPosition}`}
          />
        )}
        {connectWallet ? (
          <WalletConnectorsList onBack={() => setConnectWallet(false)} />
        ) : (
          <AuthOptions
            config={config}
            onConnectWallet={() => setConnectWallet(true)}
          />
        )}
      </ModalContent>
    </>
  );
};

export default AuthModal;
