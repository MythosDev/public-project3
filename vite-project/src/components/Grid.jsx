import React from 'react';
import demoPic from '../assets/demo_pic.png';

const Grid = () => {
  const images = [
    { src: demoPic, alt: 'Image 1' },
    { src: demoPic, alt: 'Image 2' },
    { src: demoPic, alt: 'Image 3' },
    { src: demoPic, alt: 'Image 4' },
    { src: demoPic, alt: 'Image 5' },
    { src: demoPic, alt: 'Image 6' },
    { src: demoPic, alt: 'Image 6' },
    { src: demoPic, alt: 'Image 6' },
    { src: demoPic, alt: 'Image 6' },
    { src: demoPic, alt: 'Image 6' },
    { src: demoPic, alt: 'Image 6' },
    { src: demoPic, alt: 'Image 6' },
  ];

  const styles = {
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))',  // Create a responsive grid with flexible columns
      gap: '16px',  // Space between items
      padding: '16px',
      justifyItems: 'center',  // Center content within the grid item
    },
    gridItem: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex', // Ensure the image aligns correctly within the grid item
      justifyContent: 'center',  // Center the image horizontally
    },
    image: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',  // Ensure the image covers the area without distortion
      borderRadius: '8px',
    },
  };

  return (
    <div style={styles.gridContainer}>
      {images.map((image, index) => (
        <div key={index} style={styles.gridItem}>
          <img
            src={image.src}
            alt={image.alt || `Image ${index + 1}`}
            style={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Grid;