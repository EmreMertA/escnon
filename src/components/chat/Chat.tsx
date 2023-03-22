import React from 'react';
import Content from './Content';
import Header from './Header';

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className='chat'>
      <Header />
      <Content />
    </div>
  );
};

export default Chat;
