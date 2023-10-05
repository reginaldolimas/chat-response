import user1 from '../../img/user.png';

export const MessageReceived = ({ messageHistory }) => {
    return (
        <div class="received-chats">
            <div class="received-chats-img">
                <img alt='user' src={user1} />
            </div>
            <div class="received-msg">
                <div class="received-msg-inbox">
                    {console.log('messagehistoryu',messageHistory.length)}
                    {console.log('messagehistoryu',messageHistory)}
                    {messageHistory.length < 1 ? null : messageHistory.map((messageObj, index) => (
                        <p key={index}>{messageObj.userMessage}</p>
                    ))}
                    <span class="time">18:06 PM | July 24</span>
                </div>
            </div>
        </div>
    )
}