import React, { useState } from 'react';
import '../styles/Chat.css';

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice Martin', content: 'Bonjour! J\'ai bien pris soin de Luna.', timestamp: '10:30' },
    { id: 2, sender: 'You', content: 'Merci beaucoup! Elle a l\'air heureuse.', timestamp: '10:35' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { 
        id: messages.length + 1, 
        sender: 'You', 
        content: newMessage, 
        timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        <h2>Messages</h2>
        <div className="conversations">
          <div className="conversation active">
            <div className="conversation-header">
              <span className="icon">👩‍🦰</span>
              <span className="name">Alice Martin</span>
            </div>
          </div>
          <div className="conversation">
            <div className="conversation-header">
              <span className="icon">👨‍🦱</span>
              <span className="name">Bob Durand</span>
            </div>
          </div>
        </div>
      </div>

      <div className="chat-main">
        <div className="chat-header">
          <h3>Alice Martin</h3>
          <p>Pet sitter | 👍 4.9</p>
        </div>

        <div className="chat-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
              <p>{msg.content}</p>
              <span className="timestamp">{msg.timestamp}</span>
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input 
            type="text" 
            placeholder="Écrivez votre message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage} className="btn btn-primary">Envoyer</button>
          <button className="btn btn-secondary">📸 Photo</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
