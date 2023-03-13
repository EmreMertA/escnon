import React, { createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = createContext<any>({});

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log(provider, signer, transactionContract);
};

type Props = {
  children: JSX.Element;
};

export const TransactionProvider: React.FC<Props> = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState<string>('');

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert('Please install MetaMask');

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    setCurrentAccount(accounts[0]);
  };

  const connectWallet = async () => {
    if (!ethereum) return alert('Please install MetaMask');

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    setCurrentAccount(accounts[0]);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};
