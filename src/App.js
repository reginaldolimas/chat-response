import './App.css'
import { useState } from 'react';
import { MessageHeader } from './components/MessageHeader/MessageHeader';
import { ChatPage } from './components/ChatPage/ChatPage';

function App() {
  const [userMessage, setUserMessage] = useState('');
  const [responseText, setResponseText] = useState('');
  const [input, setInput] = useState('');

  const handleSendMessage = (message) => {
    setUserMessage(message);
  };

  return (
    <>
      {/*      <h1 style={{ textAlign: 'center' }}>Chat Response</h1>
      <Chat userMessage={userMessage} chatMessage={responseText} sender='Reginaldo' />
      <div className='container__conversation__panel'>
        <Search onSendMessage={handleSendMessage} onSendMessageApi={handleSendMessageApi} />
      </div> */}
      {/* Main container */}
      <MessageHeader />
      <ChatPage onSendMessage={handleSendMessage} onSendMessageApi={handleSendMessageApi} />
    </>
  );
}

export default App;
