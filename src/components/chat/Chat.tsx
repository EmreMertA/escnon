import React, { useEffect, useState } from 'react';
import Content from './Content';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../../firebase';

type Props = {};

const Chat = (props: Props) => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [chat, setChat] = useState<any>([]);

  return (
    <div className='chat'>
      <Header data={chat} />
      <Content data={chat} />
    </div>
  );
};

export default Chat;
