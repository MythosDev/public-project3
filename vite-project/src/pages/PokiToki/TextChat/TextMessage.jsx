import React from 'react';

const TextMessage = ({ message, isOwnMessage }) => {
  return (
    <div style={{ display: 'flex', flexDirection: isOwnMessage ? 'row-reverse' : 'row', marginBottom: '10px' }}>
      <div style={{ marginRight: '10px' }}>
        <img
          src={message.userProfilePic}
          alt="User Profile"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #ddd',
          }}
        />
      </div>
      <div>
        <div
          style={{
            backgroundColor: isOwnMessage ? '#DCF8C6' : '#FFF',
            padding: '10px',
            borderRadius: '10px',
            maxWidth: '80%',
            wordWrap: 'break-word',
          }}
        >
          {message.text}
        </div>
        <div style={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>
          {message.timestamp}
        </div>
      </div>
    </div>
  );
};

export default TextMessage;
