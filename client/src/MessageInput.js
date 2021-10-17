import { useState } from 'react';
import { InputGroup, Input } from "rsuite";
import SendIcon from '@rsuite/icons/Send';

const MessageInput = ({placeholder, ...props}) => {
    const [messageInput, setMessageInput] = useState('');

    return (
        <InputGroup>
            <Input placeholder={placeholder} value={messageInput} onChange={setMessageInput}/>
            <InputGroup.Button onClick={() => {
                props.onSend({'message':messageInput})
                setMessageInput('');
            }}>
                <SendIcon />
            </InputGroup.Button>
        </InputGroup>
    )
}

export default MessageInput;