import React, { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import './Login.scss';

type Props = {};

const Login = (props: Props) => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <div className='container'>
      <div className='card'>
        {<p>{currentAccount}</p> || <p>Welcome to Escnon</p>}
        <button onClick={connectWallet}>Connect Your Wallet</button>
      </div>
    </div>
  );
};

export default Login;
