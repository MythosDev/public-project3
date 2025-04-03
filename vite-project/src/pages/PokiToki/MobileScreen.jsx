import React, { useState, useRef, useEffect } from 'react';

// Styles for MobileScreen
const mobileScreenStyle = {
  width: '400px',
  height: '800px',
  backgroundColor: '#f5f5f5',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
};

const dotsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '10px 0',
};

const dotStyle = (isActive) => ({
  width: '10px',
  height: '10px',
  backgroundColor: isActive ? '#333' : '#ccc',
  borderRadius: '50%',
  margin: '0 5px',
  transition: 'background-color 0.3s',
});

const pagesContainerStyle = {
  flex: 1,
  display: 'flex',
  width: '100%',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
};

const pageStyle = {
  width: '100%',
  height: '100%',
  flexShrink: 0,
  overflowY: 'auto', // Allow scrolling within each page if content overflows
};

// MobileScreen Component
const MobileScreen = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  // Convert children to an array
  const pages = React.Children.toArray(children);
  const pageCount = pages.length;

  // Update translateX when currentPage changes
  useEffect(() => {
    setTranslateX(-currentPage * 100); // Each page takes 100% width
  }, [currentPage]);

  // Handle drag start (mouse or touch)
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  // Handle drag move (mouse or touch)
  const handleDragMove = (clientX) => {
    if (!isDragging) return;

    const deltaX = clientX - startX;
    const percentage = (deltaX / containerRef.current.offsetWidth) * 100;
    setTranslateX(-currentPage * 100 + percentage);
  };

  // Handle drag end (mouse or touch)
  const handleDragEnd = (clientX) => {
    if (!isDragging) return;

    setIsDragging(false);
    const deltaX = clientX - startX;
    const threshold = 50; // Minimum drag distance to trigger a page change (in pixels)

    if (deltaX > threshold && currentPage > 0) {
      // Swipe right
      setCurrentPage(currentPage - 1);
    } else if (deltaX < -threshold && currentPage < pageCount - 1) {
      // Swipe left
      setCurrentPage(currentPage + 1);
    } else {
      // Snap back to current page
      setTranslateX(-currentPage * 100);
    }
  };

  // Mouse event handlers
  const handleMouseDown = (e) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = (e) => {
    handleDragEnd(e.clientX);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd(startX); // Treat as a cancel
    }
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    // Use the last known touch position (e.touches is empty on touchend)
    handleDragEnd(e.changedTouches[0].clientX);
  };

  return (
    <div style={mobileScreenStyle} ref={containerRef}>
      {/* Dots Indicator */}
      <div style={dotsContainerStyle}>
        {pages.map((_, index) => (
          <div
            key={index}
            style={dotStyle(index === currentPage)}
            onClick={() => setCurrentPage(index)} // Allow clicking dots to navigate
          />
        ))}
      </div>

      {/* Pages Container */}
      <div
        style={{
          ...pagesContainerStyle,
          transform: `translateX(${translateX}%)`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {pages.map((page, index) => (
          <div key={index} style={pageStyle}>
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileScreen;