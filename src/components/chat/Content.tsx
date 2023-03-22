import axios from 'axios';
import { MessageBox, MessageList } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

type Props = {
  position: string;
  type: string;
  title: string;
  text: string;
};

const Content = (props: Props) => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    console.log(response.data);
  });

  const messages:Props[] = [
    {
      position: 'left',
      type: 'text',
      title: 'Kursat',
      text: 'Give me a message list example !',
    },
    {
      position: 'right',
      type: 'text',
      title: 'Emre',
      text: "That's all.",
    },
  ];
 
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
        />
        <button className='content__input__button'>Send</button>
      </div>
    </div>
  );
};

export default Content;
