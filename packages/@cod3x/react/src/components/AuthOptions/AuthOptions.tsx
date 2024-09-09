import React from 'react';
import { FaChevronRight, FaWallet } from 'react-icons/fa';
import { AuthModalConfig } from '../../types';
import Button from '../Button/Button';
import EmailLogin from '../EmailLogin/EmailLogin';
import SignInAnonymously from '../SignInAnonymously/SignInAnonymously';
import SocialLogins from '../SocialLogins/SocialLogins';

interface AuthOptionsProps {
  config: AuthModalConfig;
  onConnectWallet: any;
}

const AuthOptions = ({ config, onConnectWallet }: AuthOptionsProps) => (
  <div
    className={`p-${config.appearance.modal.padding} justify-center items-center flex flex-col gap-5`}
  >
    <EmailLogin config={config} />
    <div className="w-full border-b-[1px] border-text-secondary" />
    {config.socialLogins && config.socialLogins.length > 0 && (
      <div className="w-full overflow-x-scroll h-20 flex gap-4 justify-center scrollbar-hide">
        <SocialLogins socialLogins={config.socialLogins} />
      </div>
    )}
    {config.walletConnectEnabled && (
      <Button onClick={onConnectWallet} color="successColor">
        <FaWallet className="absolute left-5" />
        Connect Wallet
        <FaChevronRight className="absolute right-2" />
      </Button>
    )}
    {config.anonymousLoginEnabled && <SignInAnonymously />}
  </div>
);

export default AuthOptions;
