import React, { useEffect, useState } from 'react';
import './Chat.css';




const Chat = ({ userMessage, chatMessage, sender }) => {

    const [messageHistory, setMessageHistory] = useState([]);

    const addMessageToHistory = (message, sender) => {
        setMessageHistory([...messageHistory, { message, sender }])
    }

    useEffect(() => {
        if (userMessage) {
            addMessageToHistory(userMessage, sender);
        }
    }, [userMessage]);

    useEffect(() => {
        if (chatMessage) {
            addMessageToHistory(chatMessage, 'chatGpt');
        }
    }, [chatMessage]);



    return (
        <div className='container_chat'>
            <div className='chat'>
                {messageHistory.map((messageObj, index) => (
                    <div key={index}>
                        <span>{messageObj.sender}: {messageObj.message}</span>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Chat