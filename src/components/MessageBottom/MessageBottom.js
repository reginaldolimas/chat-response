import { useState } from 'react';
import './MessageBottom.css';

export const MessageBottom = ({ onSendMessage, onSendMessageApi }) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(input)
    }

    const handleClick = () => {
        onSendMessage(input);
        onSendMessageApi(input);
        console.log('clicou input', input);
    }

    return (
        <div class="msg-bottom">
            <div class="input-group">
                <input onChange={handleChange} type="text" class="form-control" placeholder="Write message..." />
                <div class="input-group-append ">
                    <span class="input-group-text send-icon " onClick={handleClick}><i class="bi bi-send "></i>
                    </span>
                </div>
            </div>
        </div>
    )
}