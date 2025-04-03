import React from 'react';

// Styles for GameScreen
const gameScreenStyle = {
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

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '15px 0 10px',
  textAlign: 'center',
};

const accountContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
};

const accountIconStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#ccc', // Placeholder color for account icon
  marginRight: '10px',
};

const accountNameStyle = {
  fontSize: '16px',
  fontWeight: '500',
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

const buttonStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  fontSize: '16px',
  margin: '5px',
  cursor: 'pointer',
};

const actionButtonsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10px 0',
};

const secondaryButtonStyle = {
  backgroundColor: '#666',
  color: '#fff',
  padding: '8px 15px',
  borderRadius: '5px',
  border: 'none',
  fontSize: '14px',
  margin: '0 5px',
  cursor: 'pointer',
};

const featureIconsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  margin: '15px 0',
};

const featureIconStyle = {
  width: '30px',
  height: '30px',
  backgroundColor: '#ccc', // Placeholder color for feature icons
  borderRadius: '50%',
  margin: '0 10px',
};

const reviewsHeaderStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '20px 0 10px',
  textAlign: 'center',
};

const reviewItemStyle = {
  width: '90%',
  backgroundColor: '#e0e0e0', // Placeholder color for review items
  borderRadius: '10px',
  padding: '15px',
  margin: '10px 0',
  textAlign: 'center',
};

// GameScreen Component
const GameScreen = () => {
  return (
    <div style={gameScreenStyle}>
      {/* Banner Image */}
      <div style={bannerImgStyle} />

      {/* Title */}
      <div style={titleStyle}>Game Title</div>

      {/* Account Icon and Name */}
      <div style={accountContainerStyle}>
        <div style={accountIconStyle} />
        <div style={accountNameStyle}>Account Name</div>
      </div>

      {/* Description */}
      <div style={descriptionStyle}>Game Description</div>

      {/* Play and Fork Buttons */}
      <div style={actionButtonsContainerStyle}>
        <button style={buttonStyle}>Play</button>
        <button style={buttonStyle}>Fork</button>
      </div>

      {/* Share and Save Buttons */}
      <div style={actionButtonsContainerStyle}>
        <button style={secondaryButtonStyle}>Share</button>
        <button style={secondaryButtonStyle}>Save</button>
      </div>

      {/* Feature Icons */}
      <div style={featureIconsContainerStyle}>
        <div style={featureIconStyle} />
        <div style={featureIconStyle} />
        <div style={featureIconStyle} />
        <div style={featureIconStyle} />
      </div>

      {/* Reviews Section */}
      <div style={reviewsHeaderStyle}>Reviews</div>
      <div style={reviewItemStyle}>Review 1</div>
      <div style={reviewItemStyle}>Review 2</div>
      <div style={reviewItemStyle}>Review 3</div>
    </div>
  );
};

export default GameScreen;