import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined ,Mic,InsertEmoticon} from '@material-ui/icons'
import './Chat.css'

function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage=(e)=>{
        e.preventDefault();
        console.log('You typed >>>', input);

        setInput('');
    }

    return (
        <div className='chat'>

            <div className="chat_header">
                <Avatar src={`http://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                <p className={`chat_message ${true && 'chat_receiver'}`}>
                    <span className='chat_name'>Weghorst</span>
                    Hey!!
                    <span className="chat_timestamp">
                        3:00pm
                    </span>
                </p>
                <p className="chat_message">
                    <span className='chat_name'>Messi</span>
                    Que miras bobo?
                    <span className="chat_timestamp">
                        3:05pm
                    </span>
                </p>
            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)} placeholder='Type a message' type='text' />
                    <button type='submit' onClick={sendMessage}>Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat