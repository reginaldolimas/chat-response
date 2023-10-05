import robo from '../../img/robo.png';

export const MessageSend = () => {
    return (
        <div class="outgoing-chats">
            <div class="outgoing-chats-img">
                <img alt='robo' src={robo} />
            </div>
            <div class="outgoing-msg">
                <div class="outgoing-chats-msg">
                    <p class="multi-msg">
                        Hi riya , Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Illo nobis deleniti earum magni
                        recusandae assumenda.
                    </p>
                    <p class="multi-msg">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <span class="time">18:30 PM | July 24</span>
                </div>
            </div>
        </div>
    )
}