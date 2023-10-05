import robo from '../../img/robo.png';

export const MessageSend = ({ messageHistory }) => {
    return (
        <div class="outgoing-chats">
            <div class="outgoing-chats-img">
                <img alt='robo' src={robo} />
            </div>
            <div class="outgoing-msg">
                <div class="outgoing-chats-msg">
                    {messageHistory.length < 1 ? null : messageHistory.map((messageObj, index) => (
                        <p key={index}>{messageObj.userMessage}</p>
                    ))}
                    <span class="time">18:30 PM | July 24</span>
                </div>
            </div>
        </div>
    )
}