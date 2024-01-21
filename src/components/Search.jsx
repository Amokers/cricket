// Search.jsx
import React, { useState, useEffect } from 'react';

function Search({ searchQuery, onSearch }) {
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setLocalSearchQuery(query);
    onSearch(query);
  };

  return (
    <input
      type="text"
      value={localSearchQuery}
      onChange={handleSearchChange}
      placeholder="Rechercher un objet..."
      className="search_bar"
    />
  );
}

export default Search;
