import React from 'react';
import { BiHash } from 'react-icons/bi';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='chatHeader'>
      <div>
        <BiHash style={{ opacity: '0.5', fontSize: '32px' }} />
        <span>General</span>
      </div>
    </div>
  );
};

export default Header;
