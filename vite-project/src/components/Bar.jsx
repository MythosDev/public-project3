import React from 'react';
import { Link } from 'react-router-dom'; // For client-side navigation

// TopBar Component
const Bar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.navItems}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
        <Link to="/Portfolio" style={styles.navLink}>Services</Link>
        <Link to="/contacts" style={styles.navLink}>Contact</Link>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    width: '100%', // Makes the bar fill its parent's width
    maxWidth: '100%', // Ensures it never exceeds the parent div's width
    margin: '0 auto', // Centers it horizontally
    padding: '10px 0px',
    backgroundColor: '#333',
    color: 'white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  navItems: {
    display: 'flex',
    justifyContent: 'space-around', // Distribute links evenly across the container
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  navLinkHover: {
    backgroundColor: '#555',
  },
};

export default Bar;
