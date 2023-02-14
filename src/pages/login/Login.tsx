import React from 'react';
import './Login.scss';

type Props = {};

const Login = (props: Props) => {
  return (
    <div className='container'>
      <div className='card'>
        <p>Welcome to Escnon</p>
        <button>Connect Your Wallet</button>
      </div>
    </div>
  );
};

export default Login;
