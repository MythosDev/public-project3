import React from 'react';

const BlurOverlay = ({ isVisible = true, onClose, intensity = 8, transparency = 0.5 }) => {
  if (!isVisible) return null; // Only render if visible

  return (
    <div 
      style={{ 
        ...styles.overlay, 
        backdropFilter: `blur(${intensity}px)`, // Dynamically set blur intensity
        backgroundColor: `rgba(0, 0, 0, ${transparency})`,
      }} 
      onClick={onClose}
    >
      {/* Optional: Content inside the overlay */}
      {/* <div style={styles.content}>
        <h3>Blurred Overlay</h3>
        <p>Click anywhere to close the overlay.</p>
      </div> */}
    </div>
  );
};

// Static Styles
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50, // Ensure overlay is on top
  },
  content: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Slight shadow effect
  },
};

export default BlurOverlay;
