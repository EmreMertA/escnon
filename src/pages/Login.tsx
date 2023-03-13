import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

type Props = {};

const Login = (props: Props) => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <div className='login__container '>
      <div className='login__card'>
        { <p>Welcome to Escnon</p>}
        <button  onClick={connectWallet}>Connect Your Wallet</button>
      </div>
    </div>
  );
};

export default Login;
