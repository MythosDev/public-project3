import React, { useState } from 'react';

const TagSystem = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '15px auto' }}>

      <form onSubmit={handleAddTag} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a tag"
          style={{
            padding: '8px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            flex: 1,
            width: '200px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 12px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100px',
          }}
        >
          Add Tag
        </button>
      </form>

      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
        {tags.map((tag, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '5px',
              padding: '5px 10px',
              backgroundColor: '#007BFF',
              color: 'white',
              borderRadius: '20px',
              cursor: 'pointer',
            }}
            onClick={() => handleRemoveTag(tag)}
          >
            <span>{tag}</span>
            <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>×</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagSystem;
