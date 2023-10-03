import { OpenAI } from "openai";

const configuration = {
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
}

export const openai = new OpenAI(configuration)