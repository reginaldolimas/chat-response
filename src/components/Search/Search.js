import { Input } from 'antd';
import { Button } from 'antd';
import './Search.css';
import { useState } from 'react';


export const Search = ({ onSendMessage, onMessageApi }) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(input)
    }

    const handleSendButtonClick = () => {
        onSendMessage(input); // Chama a função do componente pai para enviar a mensagem
        onMessageApi(input);
        setInput(''); // Limpa o campo de entrada após enviar
    }

    return (
        <div className='container_search'>
            <Input onChange={handleChange} className='search' placeholder="Basic usage" />
            <Button className='button__conversation__panel' onClick={handleSendButtonClick} type="primary">Enviar</Button>
        </div>
    )
}