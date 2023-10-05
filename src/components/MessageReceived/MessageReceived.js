import user1 from '../../img/user.png';

export const MessageReceived = () => {
    return (
        <div class="received-chats">
            <div class="received-chats-img">
                <img alt='user' src={user1} />
            </div>
            <div class="received-msg">
                <div class="received-msg-inbox">
                    <p>
                        Hi !! This is message from Riya . Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Non quas nemo eum,
                        earum sunt, nobis similique quisquam eveniet pariatur
                        commodi modi voluptatibus iusto omnis harum illum iste
                        distinctio expedita illo!
                    </p>
                    <span class="time">18:06 PM | July 24</span>
                </div>
            </div>
        </div>
    )
}