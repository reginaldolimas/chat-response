import { useState } from 'react';
import './MessageBottom.css';

export const MessageBottom = ({ onSendMessage, onSendMessageApi }) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita a recarga da página ao pressionar Enter dentro do formulário
        onSendMessage(input);
        onSendMessageApi(input);
        setInput(''); // Limpar o campo de entrada após o envio
    }

    return (
        <div class="msg-bottom">
            <form onSubmit={handleSubmit}>
                <div class="input-group">
                    <input
                        value={input}
                        onChange={handleChange}
                        type="text"
                        class="form-control"
                        placeholder="Write message..." />
                    <div class="input-group-append ">
                        <span class="input-group-text send-icon " ><i class="bi bi-send "></i>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}