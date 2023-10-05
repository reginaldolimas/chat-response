import './ChatPage.css';
import { MessageReceived } from '../MessageReceived/MessageReceived';
import { MessageSend } from '../MessageSend/MessageSend';
import { MessageBottom } from '../MessageBottom/MessageBottom';

export const ChatPage = (props) => {
    return (

        <div class="chat-page">
            <div class="msg-inbox">
                <div class="chats">
                    <div class="msg-page">
                        {/*  <!-- Incoming messages --> */}
                        <MessageReceived messageHistory={props.messageHistory} />
                        {/* <!-- Outgoing messages --> */}
                        <MessageSend messageHistory={props.messageHistory} />
                    </div>
                </div>
                <MessageBottom onSendMessage={props.onSendMessage} onSendMessageApi={props.onSendMessageApi} />
            </div>
        </div>
    )
}