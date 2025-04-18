import React from 'react';
import ProfileBar from './ProfileBar'; // assuming you have a ProfileBar component

const TextChatLog = ({ messages }) => {
  return (
    <div style={{ padding: '10px 0' }}>
      {messages.map((message, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          {/* Text Message Box */}
          <div
            style={{
              backgroundColor: message.isOwnMessage ? '#dcf8c6' : '#f1f1f1',
              padding: '10px',
              borderRadius: '10px',
              maxWidth: '80%',
              marginLeft: message.isOwnMessage ? 'auto' : '0',
              marginRight: message.isOwnMessage ? '0' : 'auto',
            }}
          >
            {message.text}
          </div>

          {/* Profile Bar beneath the message */}
          <ProfileBar 
            profilePic={message.userProfilePic}
            name={message.isOwnMessage ? 'You' : 'John Doe'}
            timestamp={message.timestamp}
            isOwnMessage={message.isOwnMessage}
          />
        </div>
      ))}
    </div>
  );
};

export default TextChatLog;
