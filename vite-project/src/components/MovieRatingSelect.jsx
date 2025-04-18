import React from 'react';

function MovieRatingSelect({ options = [], value, onChange, label }) {
  return (
    <div className="p-4">
      <label htmlFor="rating" className="block mb-2 font-medium">
        {label}
      </label>
      <select
        id="rating"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="">-- Select --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MovieRatingSelect;
