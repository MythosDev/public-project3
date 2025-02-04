import React, { useState } from 'react';
import BlurOverlay from './BlurOverlay'; // Import the BlurOverlay component

export default function Gate() {
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);  // Set the entered password
  };

  const handlePasswordSubmit = () => {
    const normalizedPassword = password.trim().toLowerCase(); // Normalize password input
    console.log('Entered password:', password);  // Log the real password
    console.log('Normalized password:', normalizedPassword);  // Log the normalized password
    if (normalizedPassword === 'nemo') {  // Correct password to match
      setIsPasswordCorrect(true);
      setIsOverlayVisible(false); // Hide the blur overlay when the correct password is entered
    }
  };

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handlePasswordSubmit(); // Trigger password submit on Enter key press
    }
  };

  // Render the Gate component only if the password is incorrect
  if (isPasswordCorrect) {
    return null; // Component is hidden after the correct guess
  }

  return (
    <>
      <BlurOverlay isVisible={isOverlayVisible} />
      
      <div style={styles.container}>
        <div style={styles.box}>
          <p style={styles.label}>Enter the Correct Name</p>
          <input
            type="password"  // Use password input to mask characters
            id="password"
            value={password} // Display the entered password (masked)
            onChange={handlePasswordChange}
            onKeyDown={handleKeyPress}
            placeholder="..."
            style={styles.input}
          />
        </div>
      </div>
    </>
  );
}

// Inline Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: '100',
  },
  box: {
    border: '2px solid #333',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    textAlign: 'center',
    zIndex: '101',
  },
  label: {
    textAlign: 'center',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '18px',
    zIndex: '101',
  },
  input: {
    width: '200px',
    padding: '10px',
    fontSize: '18px',
    fontWeight: '900',
    borderRadius: '5px',
    border: '1px solid #ccc',
    textAlign: 'center',
    zIndex: '102',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    zIndex: '100',
  },
};
