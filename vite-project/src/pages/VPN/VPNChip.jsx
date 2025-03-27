import React, { useState } from 'react';

const VPNChip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('United States');

  const countries = [
    { code: 'us', name: 'United States' },
    { code: 'uk', name: 'United Kingdom' },
    { code: 'ca', name: 'Canada' },
    { code: 'au', name: 'Australia' },
    { code: 'jp', name: 'Japan' },
    { code: 'de', name: 'Germany' },
  ];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country.name);
    setIsOpen(false);
  };

  const styles = {
    container: {
      position: 'relative',
      display: 'inline-block',
    },
    chip: {
      display: 'flex',
      alignItems: 'center',
      padding: '6px 12px',
      backgroundColor: '#f0f0f0',
      borderRadius: '16px',
      cursor: 'pointer',
      userSelect: 'none',
    },
    status: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '2px 6px',
      borderRadius: '4px',
      marginRight: '8px',
      fontSize: '12px',
    },
    countryName: {
      marginRight: '6px',
      fontSize: '14px',
    },
    dropdownArrow: {
      fontSize: '12px',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      backgroundColor: 'white',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginTop: '4px',
      minWidth: '100%',
      zIndex: 1,
    },
    dropdownItem: {
      padding: '6px 12px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    dropdownItemHover: {
      backgroundColor: '#f5f5f5',
    }
  };

  return (
    <div style={styles.container}>
      <div 
        style={styles.chip}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={styles.status}>VPN</span>
        <span style={styles.countryName}>{selectedCountry}</span>
        <span style={styles.dropdownArrow}>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div style={styles.dropdownMenu}>
          {countries.map((country) => (
            <div
              key={country.code}
              style={styles.dropdownItem}
              onClick={() => handleCountrySelect(country)}
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.dropdownItemHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VPNChip;