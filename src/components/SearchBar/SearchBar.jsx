import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Поиск товаров..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
}

export default SearchBar;
