import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineDown, AiOutlinePlus } from 'react-icons/ai';
import { BiHash, BiTrash, BiLabel } from 'react-icons/bi';
import { IoExitOutline } from 'react-icons/io5';
import { shortenAddress } from '../../utils/shortenAddress';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { TransactionContext } from '../../context/TransactionContext';
import { db } from '../../firebase';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

type Props = {};

const Sidebar = (props: Props) => {
  const [chatsHidden, setChatsHidden] = useState<boolean>(false);
  const [escrowsHidden, setEscrowsHidden] = useState<boolean>(false);
  const [modalHidden, setModalHidden] = useState<boolean>(false);
  const [walletId, setWalletId] = useState<string>('');
  const [chats, setChats] = useState<any>([]);

  const navigate = useNavigate();
  const location = useLocation();

  const { currentAccount } = useContext(TransactionContext);

  const path = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, 'chats'),
        where('users', 'array-contains', currentAccount)
      );
      const querySnapshot = await getDocs(q);
      const chats: any = [];
      querySnapshot.forEach((doc) => {
        chats.push(doc.data());
      });
      setChats(chats);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const myDocRef = doc(db, 'chats', uuidv4());
    await setDoc(myDocRef, {
      chatId: myDocRef.id,
      users: [currentAccount, walletId],
      messages: [{ message: 'Hello', sender: currentAccount }],
    });

    setModalHidden(false);
  };

  return (
    <div className='sidebar'>
      <h1
        onClick={() => {
          navigate('/dashboard');
        }}
        className='sidebar__title'
      >
        ESCNON
      </h1>
      <hr />
      <div className='sidebar__chats'>
        <button
          onClick={() => setChatsHidden(!chatsHidden)}
          className='sidebar__chats__toggle'
        >
          <AiOutlineDown />
          <p>Chats</p>
        </button>
        <button onClick={() => setModalHidden(true)}>
          <AiOutlinePlus />
        </button>
      </div>
      <ul
        className={`${
          !chatsHidden ? 'sidebar__content' : 'sidebar__content__hidden'
        }`}
      >
        {chats?.map((chat: any, index: number) => {
          return (
            <li key={index}>
              <Link
                className='sidebar__content__link'
                to={`/chats/${chat.chatId}`}
              >
                <BiHash />
                <p>
                  {shortenAddress(
                    chat.users[0] === currentAccount
                      ? chat.users[1]
                      : chat.users[0]
                  )}
                </p>
              </Link>
              <BiTrash />
            </li>
          );
        })}
      </ul>
      <div className='sidebar__chats'>
        <button
          onClick={() => setEscrowsHidden(!escrowsHidden)}
          className='sidebar__chats__toggle'
        >
          <AiOutlineDown />
          <p>Escrows</p>
        </button>
        <button>
          <AiOutlinePlus />
        </button>
      </div>
      <ul
        className={`${
          !escrowsHidden ? 'sidebar__content' : 'sidebar__content__hidden'
        }`}
      >
        <li>
          <div>
            <BiLabel />
            <p>Ayakkabı</p>
          </div>
          <div>
            <h5 className='sidebar__content__status'>Bekliyor</h5>
            <BiTrash />
          </div>
        </li>
      </ul>

      {/* Modal */}
      {modalHidden && (
        <div className='sidebar__modal'>
          <div className='sidebar__modal__content'>
            <button
              className='sidebar__modal__content__close-button'
              onClick={() => setModalHidden(false)}
            >
              X
            </button>
            <h3>Yeni Sohbet</h3>
            <div className='sidebar__modal__content__input'>
              <input
                onChange={(e) => setWalletId(e.target.value)}
                type='text'
                placeholder='Adress'
              />
            </div>

            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className='sidebar__modal__content__button'
            >
              Oluştur
            </button>
          </div>
        </div>
      )}

      {/* Profile */}
      <div className='sidebar__profile'>
        <div>
          <p>{shortenAddress(currentAccount)}</p>
        </div>
        <IoExitOutline style={{ fontSize: '24px' }} />
      </div>
    </div>
  );
};

export default Sidebar;
