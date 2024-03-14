import React, { useState } from 'react';

const SearchBar = ({ filterArticles }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    filterArticles(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
