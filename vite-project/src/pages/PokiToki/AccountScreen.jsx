import React from 'react';

// Styles for AccountScreen
const accountScreenStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0',
  boxSizing: 'border-box',
  overflowY: 'auto', // Allow scrolling if content overflows
};

const bannerImgStyle = {
  width: '100%',
  height: '150px',
  backgroundColor: '#d3d3d3', // Placeholder color for banner image
  objectFit: 'cover',
};

const profilePicStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  backgroundColor: '#ccc', // Placeholder color for profile picture
  marginTop: '-50px', // Overlap with banner image
  border: '3px solid #f5f5f5', // Match background color for a clean look
};

const usernameStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '10px 0',
};

const dotsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0',
};

const dotStyle = {
  width: '10px',
  height: '10px',
  backgroundColor: '#ccc', // Placeholder color for dots
  borderRadius: '50%',
  margin: '0 5px',
};

const descriptionStyle = {
  width: '90%',
  backgroundColor: '#e0e0e0', // Placeholder color for description box
  borderRadius: '10px',
  padding: '15px',
  margin: '10px 0',
  textAlign: 'center',
  fontSize: '16px',
  color: '#666',
};

const gamesHeaderStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '20px 0 10px',
  textAlign: 'center',
};

const gameItemStyle = {
  width: '90%',
  height: '100px',
  backgroundColor: '#e0e0e0', // Placeholder color for game items
  borderRadius: '10px',
  margin: '10px 0',
};

// AccountScreen Component
const AccountScreen = () => {
  return (
    <div style={accountScreenStyle}>
      {/* Banner Image */}
      <div style={bannerImgStyle} />

      {/* Profile Picture */}
      <div style={profilePicStyle} />

      {/* Username */}
      <div style={usernameStyle}>Username</div>

      {/* Circular Links (Dots) */}
      <div style={dotsContainerStyle}>
        <div style={dotStyle} />
        <div style={dotStyle} />
        <div style={dotStyle} />
      </div>

      {/* Description */}
      <div style={descriptionStyle}>Description</div>

      {/* Games Section */}
      <div style={gamesHeaderStyle}>Games</div>
      <div style={gameItemStyle} />
      <div style={gameItemStyle} />
    </div>
  );
};

export default AccountScreen;