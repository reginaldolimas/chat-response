import user1 from '../../img/user.png';

export const MessageReceived = ({ message }) => {
    return (
        <div class="received-chats">
            <div class="received-chats-img">
                <img alt='user' src={user1} />
            </div>
            <div class="received-msg">
                <div class="received-msg-inbox">
                  
                        <p>{message}</p>
                   
                    <span class="time">18:06 PM | July 24</span>
                </div>
            </div>
        </div>
    )
}