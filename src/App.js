import './App.css'
import { useEffect, useState } from 'react';
import { MessageHeader } from './components/MessageHeader/MessageHeader';
import { ChatPage } from './components/ChatPage/ChatPage';

function App() {
  const [userMessage, setUserMessage] = useState([]);
  const [responseText, setResponseText] = useState('');
  const [input, setInput] = useState('');
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

/*   useEffect(() => {
    if (chatMessage) {
      addMessageToHistory(chatMessage);
    }
  // eslint-disable-next-line no-undef
  }, [chatMessage]); */



  const handleSendMessage = (message) => {
    const newMsg = {
      ...message,
      message,
    }
    setUserMessage(newMsg);
    console.log('user-message', message)
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