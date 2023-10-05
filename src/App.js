import './App.css'
import { useEffect, useState } from 'react';
import { MessageHeader } from './components/MessageHeader/MessageHeader';
import { ChatPage } from './components/ChatPage/ChatPage';

function App() {
  const [userMessage, setUserMessage] = useState([]);
  const [messageHistory, setMessageHistory] = useState([]);

  const addMessageToHistory = (message) => {
    setMessageHistory([...messageHistory, { message }])
  }

  useEffect(() => {
    if (userMessage) {
      addMessageToHistory(userMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userMessage]);


  const handleSendMessage = (message) => {
    setUserMessage(message);
  };

  const handleSendMessageApi = () => {
    console.log('teste');
  }

  return (
    <>
      {/*      <h1 style={{ textAlign: 'center' }}>Chat Response</h1>
      <Chat userMessage={userMessage} chatMessage={responseText} sender='Reginaldo' />
      <div className='container__conversation__panel'>
        <Search onSendMessage={handleSendMessage} onSendMessageApi={handleSendMessageApi} />
      </div> */}
      {/* Main container */}
      <MessageHeader />
      <ChatPage userMessage={userMessage} onSendMessage={handleSendMessage} onSendMessageApi={handleSendMessageApi} />
    </>
  );
}

export default App;