import React, { useContext } from 'react';
import Login from './pages/Login';
import { Route, Routes, Navigate } from 'react-router-dom';

import { TransactionContext } from './context/TransactionContext';
import Dashboard from './pages/Dashboard';
import './styles/style.scss';
import Chat from './components/chat/Chat';
import Layout from './components/chat/Layout';

const App = () => {
  const { currentAccount } = useContext(TransactionContext);

  console.log(currentAccount);

  if (currentAccount) {
    return (
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/login' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/:walletId' element={<Chat />} />
        </Routes>
      </Layout>
    );
  } else {
    return (
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    );
  }
};

export default App;
