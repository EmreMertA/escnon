import React, { useState } from 'react';
import { AiOutlineDown, AiOutlinePlus } from 'react-icons/ai';
import { BiHash, BiTrash, BiLabel } from 'react-icons/bi';
import { IoPersonCircleSharp, IoExitOutline } from 'react-icons/io5';
import { shortenAddress } from '../../utils/shortenAddress';
type Props = {};

const Sidebar = (props: Props) => {
  const [chatsHidden, setChatsHidden] = useState<boolean>(false);
  const [escrowsHidden, setEscrowsHidden] = useState<boolean>(false);

  return (
    <div className='sidebar'>
      <h1 className='sidebar__title'>ESCNON</h1>
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
          <div>
            <BiHash />
            <p>
              {shortenAddress('0xd87563ca01c3ec2a747e409f810afd137a686652')}
            </p>
          </div>
          <BiTrash />
        </li>

        <li>
          <div>
            <BiHash />
            <p>
              {shortenAddress('0xd87563ca01c3ec2a747e409f810afd137a686652')}
            </p>
          </div>
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
          <p>{shortenAddress('0x4D16AB6FE0152901922cD3b53d285582c2571E6A')}</p>
        </div>
        <IoExitOutline style={{ fontSize: '24px' }} />
      </div>
    </div>
  );
};

export default Sidebar;
