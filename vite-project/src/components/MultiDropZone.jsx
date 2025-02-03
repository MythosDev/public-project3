import React, { useState } from 'react';

const MultiDropZone = ({ onFilesDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileList, setFileList] = useState([]);

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

    if (e.dataTransfer.files) {
      const filesArray = Array.from(e.dataTransfer.files);
      addFiles(filesArray);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      addFiles(filesArray);
    }
  };

  const addFiles = (files) => {
    setFileList((prevFiles) => [...prevFiles, ...files]); // Merge files
    if (onFilesDrop) onFilesDrop([...fileList, ...files]); // Send updated file list to parent
  };

  const removeFile = (index) => {
    const updatedFiles = [...fileList];
    updatedFiles.splice(index, 1);
    setFileList(updatedFiles);
    if (onFilesDrop) onFilesDrop(updatedFiles);
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
      <p>Drag & Drop files here, or click to upload</p>
      <input
        type="file"
        multiple
        style={{ display: 'none' }}
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
        Choose Files
      </label>

      {/* Display Uploaded Files */}
      {fileList.length > 0 && (
        <ul style={{ marginTop: '20px', textAlign: 'left' }}>
          {fileList.map((file, index) => (
            <li key={index} style={{ marginBottom: '5px' }}>
              {file.name}{' '}
              <button
                onClick={() => removeFile(index)}
                style={{
                  marginLeft: '10px',
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  padding: '2px 6px',
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiDropZone;