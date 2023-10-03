import { Search } from './components/Search/Search';
import Chat from './components/Chat/Chat';
import './App.css'
import { useState } from 'react';
import OpenAI from "openai";


function App() {
  const [userMessage, setUserMessage] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleSendMessageApi = async (input) => {
    try {    
      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true,
      });

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "Você será um corretor de texto.  Você receberá um texto e irá corrigir a gramática e retornará o texto na escrita formal."
          },
          {
            role: "user",
            content: input,
          },
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      setResponseText(response.choices[0].message.content)
    } catch (error) {
      console.error('Erro ao chamar a API do OpenAi', error);
    }
  }

/*   useEffect(() => {
    const teste = handleSendMessageApi('oi tudo bom contigo?');
  }, []); */

  const handleSendMessage = (message) => {
    setUserMessage(message);
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Chat Response</h1>
      <Chat userMessage={userMessage} chatMessage={responseText} sender='Reginaldo' />
      <div className='container__conversation__panel'>
        <Search onSendMessage={handleSendMessage} onMessageApi={handleSendMessageApi} />
      </div>
    </>
  );
}

export default App;
