import './ChatPage.css';
import { MessageReceived } from '../MessageReceived/MessageReceived';
import { MessageSend } from '../MessageSend/MessageSend';
import { MessageBottom } from '../MessageBottom/MessageBottom';

export const ChatPage = () => {
    return (

        <div class="chat-page">
            <div class="msg-inbox">
                <div class="chats">
                    <div class="msg-page">
                        {/*  <!-- Incoming messages --> */}
                        <MessageReceived />
                        {/* <!-- Outgoing messages --> */}
                        <MessageSend />
                    </div>
                </div>
                <MessageBottom />
            </div>
        </div>
    )
}