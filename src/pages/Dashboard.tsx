import React from 'react';
import Chat from '../components/chat/Chat';
import { Sidebar } from '../components/sidebar';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className='container__dashboard'>
      <Sidebar />
      <div className='dashboard__content'>
        <Chat />
      </div>
    </div>
  );
};

export default Dashboard;
