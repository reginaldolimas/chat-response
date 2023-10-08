        import robo from '../../img/robo.png';
        import { AiOutlineCopy } from 'react-icons/ai';

        export const MessageSend = ({ message }) => {
            return (
                <div class="outgoing-chats">
                    <div class="outgoing-chats-img">
                        <img alt='robo' src={robo} />
                    </div>
                    <div class="outgoing-msg">
                        <div class="outgoing-chats-msg">
                            <p>{message.message}<span className='copyToClipBoard'><AiOutlineCopy /></span></p>
                            <span class="time">{message.timestamp}</span>
                        </div>
                    </div>
                </div>
            )
        }