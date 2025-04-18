import React from 'react';

const ProfileBar = ({ profilePic, name, timestamp, isOwnMessage }) => {
  return (
    <div 
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '5px',
        flexDirection: 'row', // Always row, so profile pic and info are next to each other
        justifyContent: isOwnMessage ? 'flex-end' : 'flex-start', // Align the profile bar to the same side as the message
      }}
    >
      {/* Profile Picture */}
      <img
        src={profilePic}
        alt={name}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          marginRight: isOwnMessage ? '0' : '10px',
          marginLeft: isOwnMessage ? '10px' : '0',
        }}
      />
      {/* Name and Timestamp */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{name}</span>
        <span style={{ fontSize: '12px', color: '#888' }}>{timestamp}</span>
      </div>
    </div>
  );
};

export default ProfileBar;
