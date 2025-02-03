import React from 'react';
import { Link } from 'react-router-dom';  // For client-side navigation (with React Router)

// TopBar Component
const TopBar = () => {
  return (
    <div style={styles.container}>
      <div style={styles.navItems}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/about" style={styles.navLink}>About</Link>
        <Link to="/services" style={styles.navLink}>Services</Link>
        <Link to="/contact" style={styles.navLink}>Contact</Link>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,  // Ensure it stays on top of other content
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  navItems: {
    display: 'flex',
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

export default TopBar;
