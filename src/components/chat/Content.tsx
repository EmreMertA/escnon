import React, { useContext, useState, useEffect } from 'react';
import { MessageBox, MessageList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { TransactionContext } from '../../context/TransactionContext';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

type Props = {
  position: string;
  type: string;
  title: string;
  text: string;
  data: any;
};

const Content: React.FC<Props> = ({ data }) => {
  const { currentAccount } = useContext(TransactionContext);
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const [message, setMessage] = useState<{
    type: string;
    text: string;
    position: string;
    author: string;
    date: Date;
  }>({
    type: 'text',
    text: '',
    position: 'right',
    author: currentAccount,
    date: new Date(),
  });

  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    const chatDoc = doc(db, 'chats', path);
    const messageData = onSnapshot(chatDoc, (doc) => {
      if (doc.exists()) {
        setMessages(
          doc.data().messages.map((message: any) => {
            return {
              author: message.author,
              position: message.author === currentAccount ? 'right' : 'left',
              type: 'text',
              text: message.text,
              date: message.date,
            };
          })
        );
      } 
    });
    return messageData;
  }, []);
  console.log(messages);

  const addMessage = async (e: any) => {
    const myDocRef = doc(db, 'chats', path);
    await updateDoc(myDocRef, {
      messages: [...messages, message],
    })
      .then(() => {
        console.log('Document updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  };

  return (
    <div className='content'>
      <div className='content__panel'>
        <MessageList
          className='message-list'
          lockable={true}
          toBottomHeight={'100%'}
          dataSource={messages}
        />
      </div>
      <div className='content__input'>
        <input
          placeholder='Message'
          className='content__input__message'
          type='text'
          name='message'
          id=''
          onChange={(e) => setMessage({ ...message, text: e.target.value })}
          value={message.text}
        />
        <button
          className='content__input__button'
          onClick={(e) => addMessage(e)}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Content;
