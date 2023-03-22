import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineDown, AiOutlinePlus } from 'react-icons/ai';
import { BiHash, BiTrash, BiLabel } from 'react-icons/bi';
import { IoExitOutline } from 'react-icons/io5';
import { shortenAddress } from '../../utils/shortenAddress';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { TransactionContext } from '../../context/TransactionContext';
import { firestore } from '../../firebase';

type Props = {};

const Sidebar = (props: Props) => {
  const [chatsHidden, setChatsHidden] = useState<boolean>(false);
  const [escrowsHidden, setEscrowsHidden] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { currentAccount } = useContext(TransactionContext);
  console.log(currentAccount);

  const path = location.pathname.split('/')[2];
  console.log(path);

  useEffect(() => {
    const fetchData = async () => {
      const response = await firestore.collection('chats').get();
      console.log(response.docs.map((doc: any) => doc.data()));
    };
    fetchData();
  }, []);

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
      <button
        onClick={() => setChatsHidden(!chatsHidden)}
        className='sidebar__chats'
      >
        <button className='sidebar__chats__toggle'>
          <AiOutlineDown />
          <p>Chats</p>
        </button>
        <button>
          <AiOutlinePlus />
        </button>
      </button>
      <ul
        className={`${
          !chatsHidden ? 'sidebar__content' : 'sidebar__content__hidden'
        }`}
      >
        <li>
          <Link
            className='sidebar__content__link'
            to={'/chats/0xd87563ca01c3ec2a747e409f810afd137a686652'}
          >
            <BiHash />
            <p>
              {shortenAddress('0xd87563ca01c3ec2a747e409f810afd137a686652')}
            </p>
          </Link>
          <BiTrash />
        </li>

        <li>
          <Link
            className='sidebar__content__link'
            to={'/chats/0xd87563ca01c3ec2a747e409f810afd137a686652'}
          >
            <BiHash />
            <p>
              {shortenAddress('0xd87563ca01c3ec2a747e409f810afd137a686652')}
            </p>
          </Link>
          <BiTrash />
        </li>
      </ul>
      <button
        onClick={() => setEscrowsHidden(!escrowsHidden)}
        className='sidebar__chats'
      >
        <button className='sidebar__chats__toggle'>
          <AiOutlineDown />
          <p>Escrows</p>
        </button>
        <button>
          <AiOutlinePlus />
        </button>
      </button>
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
