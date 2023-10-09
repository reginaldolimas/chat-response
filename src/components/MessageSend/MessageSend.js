import robo from '../../img/robo.png';
import './MessageSend.css';
import { AiOutlineCopy } from 'react-icons/ai';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

export const MessageSend = ({ message }) => {
    const [ valueClipBoard, setValueClipBoard ] = useState({value: message.message, copied: false});

    return (
        <div class="outgoing-chats">
            <div class="outgoing-chats-img">
                <img alt='robo' src={robo} />
            </div>
            <div class="outgoing-msg">
                <div class="outgoing-chats-msg">
                    <p>{message.message}
                        <CopyToClipboard text={valueClipBoard.value} onCopy={()=>setValueClipBoard({copied: true})}>
                            <span className='ToClipBoard'><AiOutlineCopy /></span>
                        </CopyToClipboard>
                    </p>
                    <span class="time">{message.timestamp}</span>
                    {valueClipBoard.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                </div>
            </div>
        </div>
    )
}