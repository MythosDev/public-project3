import React, { useEffect, useState } from 'react';
import TextChatLog from './TextChatLog'; // assuming you have a TextChatLog component
import TextChatInput from './TextChatInput'; // assuming you have a TextChatInput component

const TextChatPage = ({ chatName, messages, onSendMessage, backButtonHandler, profilePic }) => {
  const [localMessages, setLocalMessages] = useState(messages || []);

  // Default messages if no messages are passed
  const defaultMessages = [
    { text: 'Hello, how are you?', timestamp: '12:00 PM', isOwnMessage: false, userProfilePic: '/demo_pic.png' },
    { text: 'I am doing great, thanks!', timestamp: '12:01 PM', isOwnMessage: true, userProfilePic: '/demo_pic.png' },
  ];

  // Use defaultMessages if no messages are passed
  const chatMessages = localMessages.length > 0 ? localMessages : defaultMessages;

  // Automatically send a default message on component load
  useEffect(() => {
    if (localMessages.length === 0) {
      handleSendMessage("Welcome to the chat!");
    }
  }, [localMessages]);

  // Send message handler
  const handleSendMessage = (messageText) => {
    const newMessage = {
      text: messageText,
      timestamp: new Date().toLocaleTimeString(),
      isOwnMessage: true,
      userProfilePic: '/demo_pic.png',
    };
    // Update the local state with the new message
    setLocalMessages([...localMessages, newMessage]);

    // Call the parent handler if needed (optional)
    if (onSendMessage) {
      onSendMessage(messageText);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Back Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={backButtonHandler}>Back</button>
        <h2 style={{ textAlign: 'center', flex: 1 }}>{chatName}</h2>
      </div>

      {/* Text Chat Log */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <TextChatLog messages={chatMessages} />
      </div>

      {/* Text Chat Input (Positioned at the bottom) */}
      <div style={{ paddingTop: '10px', marginBottom: '35px', }}>
        <TextChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default TextChatPage;
