import './ChatPage.css';
import { MessageReceived } from '../MessageReceived/MessageReceived';
import { MessageSend } from '../MessageSend/MessageSend';
import { MessageBottom } from '../MessageBottom/MessageBottom';
import { useEffect } from 'react';

export const ChatPage = (props) => {

    const renderedComponents = props.messageHistory.map((message, index) => {
        if (message.user === "user") {
            return <MessageReceived key={index} message={message} />;
        } else if (message.user === "chatgpt") {
            return <MessageSend key={index} message={message} />;
        }
        return null;
    });

    useEffect(() => {
        console.log('aquiiiiii', props.messageHistory)
    }, [props.messageHistory]);

    return (

        <div class="chat-page">
            <div class="msg-inbox">
                <div class="chats">
                    <div class="msg-page">
                        {renderedComponents}
                    </div>
                </div>
                <MessageBottom onSendMessage={props.onSendMessage} onSendMessageApi={props.onSendMessageApi} />
            </div>
        </div>
    )
}