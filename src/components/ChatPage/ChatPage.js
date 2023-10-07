import './ChatPage.css';
import { MessageReceived } from '../MessageReceived/MessageReceived';
import { MessageSend } from '../MessageSend/MessageSend';
import { MessageBottom } from '../MessageBottom/MessageBottom';
import { useEffect } from 'react';

export const ChatPage = (props) => {

    const renderedComponents = props.messageHistory.map((message, index) => {
        if (message.user === "user") {
            // Renderizar Componente1 para mensagens do usuário
            return <MessageReceived key={index} message={message.message} />;
        } else if (message.user === "chatgpt") {
            // Renderizar Componente2 para mensagens do ChatGPT
            return <MessageSend key={index} message={message.message} />;
        }
        return null; // Retornar null para mensagens desconhecidas (ou você pode fazer algo diferente)
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
                        {/* <MessageReceived messageHistory={props.messageHistory} />
                        <MessageSend messageHistory={props.messageHistory} /> */}
                    </div>
                </div>
                <MessageBottom onSendMessage={props.onSendMessage} onSendMessageApi={props.onSendMessageApi} />
            </div>
        </div>
    )
}