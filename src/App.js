import { Search } from './components/Search/Search';
import Chat from './components/Chat/Chat';
import './App.css'
import { useEffect, useState } from 'react';
// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";


function App() {
  const [userMessage, setUserMessage] = useState('');
  const [responseText, setResponseText] = useState('');
  const handleSendMessageApi = async (input) => {
    try {

      const apiKey = "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";

      const openai = new OpenAI({
        apiKey: apiKey, dangerouslyAllowBrowser: true,
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
      setResponseText(response.data.choices[0].message.content)

    } catch (error) {
      console.error('Erro ao chamar a API do OpenAi', error);
    }
  }

  useEffect (() => {
    const teste = handleSendMessageApi('Olá tudo bem?');
    console.log('oioioioioiteste', teste);
  }, []);

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
