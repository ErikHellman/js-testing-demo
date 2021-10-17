import { Container, Header, Content, Button, ButtonToolbar } from 'rsuite';
import ChatMessages from './ChatMessages';
import 'rsuite/dist/rsuite.min.css';
import MessageInput from './MessageInput';
import { fetchMessages, sendMessage } from './chatApi'
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    const messages = await fetchMessages();
    console.log('Got new message:', messages);
    setMessages(messages)
  }

  const sendAndUpdate = async (message) => {
    const updated = await sendMessage(message);
    setMessages(updated)
  }

  return (
    <div className="show-container" style={styles}>
      <Container>
        <Header>
          <h1>Chat</h1>
        </Header>
        <Content>
          <ButtonToolbar>
            <Button appearance='primary' onClick={loadMessages} style={buttonStyles}>
              Load messages
            </Button>
          </ButtonToolbar>
          <ChatMessages messages={messages} />
          <MessageInput onSend={sendAndUpdate} />
        </Content>
      </Container>
    </div>
  );
}

const styles = {
  'padding': '1em',
  'width': '50vw'
}

const buttonStyles = {
  'marginBottom': '1.5em'
}

export default App;
