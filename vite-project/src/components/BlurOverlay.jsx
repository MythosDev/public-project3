import React from 'react';

const BlurOverlay = ({ isVisible, onClose }) => {
  if (!isVisible) return null; // Only render the overlay if it's visible

  return (
    <div style={styles.overlay} onClick={onClose}>
      {/* <div style={styles.content}>
        <h3>Blurred Overlay</h3>
        <p>Click anywhere to close the overlay.</p>
      </div> */}
    </div>
  );
};

// Inline Styles
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    backdropFilter: 'blur(8px)', // Apply blur effect to the background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50, // Ensure the overlay is on top of other content
  },
  content: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: for a slight shadow effect on content
  },
};

export default BlurOverlay;
