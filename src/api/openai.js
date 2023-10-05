// openai.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function fetchResponse(input) {
  try {
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

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Erro ao chamar a API do OpenAI', error);
    throw error; // Re-lança o erro para que possa ser tratado onde a função é chamada
  }
}
