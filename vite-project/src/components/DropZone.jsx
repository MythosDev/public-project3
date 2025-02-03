
import React, { useState } from 'react';

const DragDropFileInput = ({ onFileDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  // Handle drag events
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      if (onFileDrop) onFileDrop(file); // Pass file back to parent
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      if (onFileDrop) onFileDrop(file); // Pass file back to parent
    }
  };

  return (
    <div
      style={{
        border: '2px dashed #007bff',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        color: '#007bff',
        backgroundColor: isDragging ? '#f0f8ff' : '#fff',
        transition: 'background-color 0.3s ease',
      }}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p>{fileName || 'Drag & Drop a file here, or click to upload'}</p>
      <input
        type="file"
        style={{
          display: 'none',
        }}
        id="fileInput"
        onChange={handleFileChange}
      />
      <label
        htmlFor="fileInput"
        style={{
          display: 'inline-block',
          marginTop: '10px',
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Choose a file
      </label>
    </div>
  );
};

export default DragDropFileInput;

