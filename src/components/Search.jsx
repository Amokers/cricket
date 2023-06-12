import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Appel de la fonction onSearch avec la valeur de recherche mise à jour
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Rechercher un item..."
    />
  );
}

export default Search;
