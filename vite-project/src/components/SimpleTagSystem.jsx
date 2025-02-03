import React, { useState } from "react";

const SimpleTagSystem = ({ placeholder = "Add a tag..." }) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Add tag when Enter is pressed
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  // Remove tag
  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <div style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <div key={index} style={styles.tag}>
            {tag}
            <span
              style={styles.closeButton}
              onClick={() => removeTag(index)}
            >
              &times;
            </span>
          </div>
        ))}
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.input}
        />
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    maxWidth: "400px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "8px",
  },
  tag: {
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "3px",
    padding: "5px 8px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  closeButton: {
    cursor: "pointer",
    marginLeft: "5px",
    fontWeight: "bold",
  },
  input: {
    border: "none",
    outline: "none",
    padding: "5px",
    fontSize: "14px",
    flex: "1",
    minWidth: "100px",
  },
};

export default SimpleTagSystem;