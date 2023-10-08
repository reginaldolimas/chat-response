import './App.css'
import { useState } from 'react';
import { MessageHeader } from './components/MessageHeader/MessageHeader';
import { ChatPage } from './components/ChatPage/ChatPage';
import { fetchResponse } from './api/openai';

function App() {
  const [messageHistory, setMessageHistory] = useState([]);

  const addMessageToHistory = (user, message) => {
    const now = new Date(); // Obtém a data e hora atual
    const formattedDate = now.toLocaleString(); // Formata a data e hora como uma string legível

    setMessageHistory(prevHistory => prevHistory.concat({ user, message, timestamp: formattedDate }));
    /* setMessageHistory([...messageHistory, { user, message }]); */
  }

  const handleSendMessage = (message) => {
    addMessageToHistory('user', message);
    /*  setUserMessage(message); */
  };

  const handleSendMessageApi = async (input) => {
    try {
      const responseGpt = await fetchResponse(input);
      addMessageToHistory('chatgpt', responseGpt);
    } catch (error) {
      console.error('Ocorreu um erro ao enviar a mensagem', error)
    }
  }
  return (
    <>
      <MessageHeader />
      <ChatPage messageHistory={messageHistory} onSendMessage={handleSendMessage} onSendMessageApi={handleSendMessageApi} />
    </>
  );
}

export default App;