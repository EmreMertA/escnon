import React from 'react';
import { Sidebar } from '../sidebar';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='container__dashboard'>
      <Sidebar />
      <div className='dashboard__content'>{children}</div>
    </div>
  );
};

export default Layout;
