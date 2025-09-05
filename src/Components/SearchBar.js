import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      onChange={e => onSearch(e.target.value)}
      style={{ marginBottom: '1rem', width: '100%' }}
    />
  );
};

export default SearchBar;
