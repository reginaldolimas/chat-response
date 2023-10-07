import robo from '../../img/robo.png';

export const MessageSend = ({ message }) => {
    return (
        <div class="outgoing-chats">
            <div class="outgoing-chats-img">
                <img alt='robo' src={robo} />
            </div>
            <div class="outgoing-msg">
                <div class="outgoing-chats-msg">
                    <p>{message}</p>
                    <span class="time">18:30 PM | July 24</span>
                </div>
            </div>
        </div>
    )
}