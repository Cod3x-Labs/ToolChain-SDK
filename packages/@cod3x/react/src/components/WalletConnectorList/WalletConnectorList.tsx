import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
// import coinbase from "../../assets/coinbase.svg";
// import metamask from "../../assets/metamask.svg";
// import rabby from "../../assets/rabby.png";
// import trustwallet from "../../assets/trustwallet.png";
// import moonLogoLight from "../../assets/moon-logo-light.png";
// import walletconnect from "../../assets/walletconnect.svg";
import { FaWallet } from 'react-icons/fa';
import { useAccount, useConnect, useSignMessage } from 'wagmi';
import { useConnectToCodex } from '../../hooks/useConnectToCodex';

interface WalletConnectorsListProps {
  onBack: any;
}

const WalletConnectorsList = ({ onBack }: WalletConnectorsListProps) => {
  const { connectors, connect } = useConnect();
  const { address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const walletAddress = address ? address : '';
  const { connectToCodexSiwe } = useConnectToCodex({
    address: walletAddress,
    signMessageAsync,
  });

  // const walletIcons: any = useMemo(
  //   () => ({
  //     MetaMask: <img src={metamask} />,
  //     "Coinbase Wallet": <img src={coinbase} width={60} />,
  //     "Rabby Wallet": <img src={rabby} width={60} />,
  //     Safe: <img src={trustwallet} width={60} />,
  //     Codex: <img src={moonLogoLight} width={60} />,
  //     WalletConnect: <img src={walletconnect} width={60} />,
  //     "Browser Wallet": <FaWallet />,
  //   }),
  //   []
  // );

  const handleConnect = async (connector: any) => {
    connect({ connector });
    connectToCodexSiwe();
  };

  //remove duplicate connectors
  const uniqueConnectors = connectors.filter(
    (v: any, i: any, a: any) => a.findIndex((t: any) => t.name === v.name) === i
  );

  return (
    <div className="p-8 pt-15 justify-center items-center flex flex-col gap-5">
      <div
        className="pl-5 pt-5 justify-center items-center flex gap-5 absolute top-0 left-0 opacity-70 hover:opacity-100 cursor-pointer hover"
        onClick={onBack}
      >
        <FaArrowLeft />
        Back
      </div>
      <div className="flex flex-col justify-center gap-5 items-center overflow-y-auto">
        <FaWallet size={40} className="text-accent" />
        <p className="text-text-secondary">Connect to a wallet</p>
        {uniqueConnectors &&
          uniqueConnectors.map((connector: any) => (
            <div key={connector.uid} className="flex flex-col items-center">
              <button
                onClick={() => handleConnect(connector)}
                className="border-2 border-transparent relative p-2 bg-accent-color w-80 h-30 rounded-sm flex items-center justify-center gap-2 text-text-primary hover:border-2 hover:border-text-primary hover:bg-accent-color hover:text-text-primary"
              >
                {/* {walletIcons[connector.name] && (
                  <div className="max-w-5 max-h-5 absolute left-5">
                    {walletIcons[connector.name]}
                  </div>
                )} */}
                {connector.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WalletConnectorsList;
