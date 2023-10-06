import './App.css'
import { useState } from 'react';
import { MessageHeader } from './components/MessageHeader/MessageHeader';
import { ChatPage } from './components/ChatPage/ChatPage';
import { fetchResponse } from './api/openai';

function App() {
  /*   const [userMessage, setUserMessage] = useState([]); */
  const [messageHistory, setMessageHistory] = useState([]);

  const addMessageToHistory = (userMessage, gptMessage) => {
    setMessageHistory([...messageHistory, { userMessage, gptMessage }]);
  }

  const handleSendMessage = (message) => {
    addMessageToHistory(message, '');
    /*  setUserMessage(message); */
  };

  const handleSendMessageApi = async (input) => {
    try {
      const responseGpt = await fetchResponse(input);
      console.log('aquiiiiii', responseGpt)
      addMessageToHistory('', responseGpt);
    } catch (error) {
      console.error('Ocorreu um erro ao enviar a mensagem', error)
    }
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
      <ChatPage messageHistory={messageHistory} onSendMessage={handleSendMessage} onSendMessageApi={handleSendMessageApi} />
    </>
  );
}

export default App;