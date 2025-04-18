import React, { useState } from 'react';

const TextChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div style={{ display: 'flex', padding: '10px' }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        style={{
          flex: 1,
          padding: '10px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          marginRight: '10px',
        }}
      />
      <button
        onClick={handleSend}
        style={{
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '20px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Send
      </button>
    </div>
  );
};

export default TextChatInput;
