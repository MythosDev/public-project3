import React, { useState, useEffect } from 'react';

const VPNComponent = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [connectedTime, setConnectedTime] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United States',
    flagUrl: 'https://flagcdn.com/w40/us.png', // Placeholder URL for US flag
  });

  // Sample countries with flag URLs
  const countries = [
    { name: 'United States', flagUrl: 'vite-project/public/Cover_Art.png' },
    { name: 'United Kingdom', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    { name: 'Canada', flagUrl: 'https://flagcdn.com/w40/ca.png' },
    { name: 'Australia', flagUrl: 'https://flagcdn.com/w40/au.png' },
    { name: 'Japan', flagUrl: 'https://flagcdn.com/w40/jp.png' },
  ];

  // Timer effect for connection time
  useEffect(() => {
    let timer;
    if (isConnected) {
      timer = setInterval(() => {
        setConnectedTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isConnected]);

  // Format time as HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setConnectedTime(0);
  };

  const buttonStyle = {
    backgroundColor: isConnected ? '#00BCD4' : '#757575',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '20px',
    cursor: isConnected ? 'pointer' : 'default',
    fontSize: '14px',
    width: '100%',
    marginTop: '10px',
  };

  const containerStyle = {
    backgroundColor: '#424242',
    color: '#B0BEC5',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '250px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  };

  const flagContainerStyle = {
    width: '40px',
    height: '40px',
    margin: '0 auto 10px',
    border: '2px solid #00BCD4',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const flagStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const countryStyle = {
    fontSize: '18px',
    margin: '10px 0',
  };

  const timeStyle = {
    fontSize: '14px',
    color: '#90A4AE',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={flagContainerStyle}>
        <img
          src={selectedCountry.flagUrl}
          alt={`${selectedCountry.name} flag`}
          style={flagStyle}
        />
      </div>
      <div style={countryStyle}>{selectedCountry.name}</div>
      <div style={timeStyle}>{formatTime(connectedTime)}</div>
      <button
        style={buttonStyle}
        onClick={handleDisconnect}
        disabled={!isConnected}
      >
        Disconnect
      </button>
    </div>
  );
};

export default VPNComponent;