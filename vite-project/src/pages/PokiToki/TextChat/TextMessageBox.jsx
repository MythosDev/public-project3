import React from 'react';

const TextMessageBox = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: '#e0e0e0',
        padding: '15px',
        borderRadius: '10px',
        wordWrap: 'break-word',
        maxWidth: '80%',
      }}
    >
      {text}
    </div>
  );
};

export default TextMessageBox;
