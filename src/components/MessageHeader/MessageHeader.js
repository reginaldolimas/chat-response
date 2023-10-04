import './MessageHeader.css';
import userpng from '../../img/user2.png'

export const MessageHeader = () => {
    return (
        <div class="msg-header">
            <div class="container1">
                <img alt='' src={userpng} class="msgimg" />
                <div class="active ">
                    <p>User name</p>
                </div>
            </div>
        </div>
    )
}