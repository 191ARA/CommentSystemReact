import { useState } from 'react';
import './MessagesPage.css';

const MessagesPage = () => {
  const [conversations, setConversations] = useState([
    { id: 1, name: 'Jane Smith', lastMessage: 'Hey, how are you doing?', time: '2h ago', unread: true },
    { id: 2, name: 'Mike Johnson', lastMessage: 'Meeting at 3pm tomorrow', time: '1d ago', unread: false },
    { id: 3, name: 'Sarah Williams', lastMessage: 'Thanks for the help!', time: '3d ago', unread: false },
  ]);
  
  const [activeConversation, setActiveConversation] = useState(null);

  return (
    <div className="messages-page">
      <div className="conversations-list">
        <div className="messages-header">
          <h2>Messages</h2>
          <button className="new-message-btn">+ New Message</button>
        </div>
        
        <div className="search-bar">
          <input type="text" placeholder="Search messages..." />
        </div>
        
        <div className="conversations">
          {conversations.map(conv => (
            <div 
              key={conv.id} 
              className={`conversation ${conv.unread ? 'unread' : ''} ${activeConversation === conv.id ? 'active' : ''}`}
              onClick={() => setActiveConversation(conv.id)}
            >
              <div className="avatar"></div>
              <div className="conversation-info">
                <div className="conversation-header">
                  <span className="name">{conv.name}</span>
                  <span className="time">{conv.time}</span>
                </div>
                <p className="last-message">{conv.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="conversation-view">
        {activeConversation ? (
          <div className="active-conversation">
            <div className="conversation-header">
              <h3>{conversations.find(c => c.id === activeConversation).name}</h3>
            </div>
            
            <div className="messages-container">
              <div className="message received">
                <p>Hey there! How are you doing?</p>
                <span className="time">10:30 AM</span>
              </div>
              <div className="message sent">
                <p>I'm good, thanks! How about you?</p>
                <span className="time">10:32 AM</span>
              </div>
            </div>
            
            <div className="message-input">
              <input type="text" placeholder="Type a message..." />
              <button className="send-btn">Send</button>
            </div>
          </div>
        ) : (
          <div className="no-conversation">
            <p>Select a conversation to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;