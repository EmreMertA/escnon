import React, { useContext } from 'react';
import { BiHash } from 'react-icons/bi';
import { TransactionContext } from '../../context/TransactionContext';
import { shortenAddress } from '../../utils/shortenAddress';

type Props = {
  data?: any;
};

const Header: React.FC<Props> = ({ data }) => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className='chatHeader'>
      <div>
        <BiHash style={{ opacity: '0.5', fontSize: '32px' }} />
        <span></span>
      </div>
    </div>
  );
};

export default Header;
