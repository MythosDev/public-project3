import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarStyles = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '250px',
    height: '100%',
    backgroundColor: '#333',
    color: 'white',
    transition: 'transform 0.3s ease-in-out',
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
  };

  const toggleButtonStyles = {
    position: 'absolute',
    top: '20px',
    right: '-50px',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  const sidebarLinksStyles = {
    paddingTop: '60px',
    listStyleType: 'none',
    paddingLeft: '0',
  };

  const sidebarLinkStyles = {
    padding: '15px',
  };

  const linkStyles = {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
  };

  const linkHoverStyles = {
    backgroundColor: '#575757',
  };

  return (
    <div style={sidebarStyles}>
      <button style={toggleButtonStyles} onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <ul style={sidebarLinksStyles}>
        <li style={sidebarLinkStyles}>
          <a href="#home" style={linkStyles} onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyles.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
            Home
          </a>
        </li>
        <li style={sidebarLinkStyles}>
          <a href="#about" style={linkStyles} onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyles.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
            About
          </a>
        </li>
        <li style={sidebarLinkStyles}>
          <a href="#services" style={linkStyles} onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyles.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
            Services
          </a>
        </li>
        <li style={sidebarLinkStyles}>
          <a href="#contact" style={linkStyles} onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyles.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = ''}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
