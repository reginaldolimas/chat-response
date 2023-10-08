import user1 from '../../img/user.png';

export const MessageReceived = ({ message }) => {
    return (
        <div class="received-chats">
            <div class="received-chats-img">
                <img alt='user' src={user1} />
            </div>
            <div class="received-msg">
                <div class="received-msg-inbox">
                    <p>{message.message}</p>


                    <span class="time">{message.timestamp}</span>
                </div>
            </div>
        </div>
    )
}