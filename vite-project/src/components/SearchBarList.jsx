import React, { useState } from "react";

const SearchBarList = ({ placeholder, data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value); // Notify parent of search term changes
    }
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "0px" }}>
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        value={searchTerm}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          boxSizing: 'border-box',
        }}
      />
      <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
        {searchTerm &&
          filteredData.map((item, index) => (
            <li key={index} style={{ padding: "5px 0" }}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBarList;
