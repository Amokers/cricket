import React, { useState } from 'react';
import Search from './components/Search';
import ItemList from './components/ItemList';
import ItemCard from './components/ItemCard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);


  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedItem(null); // Réinitialise selectedItem lors d'une nouvelle recherche
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBack = () => {
    setSearchQuery(''); 
    setSelectedItem(null);
  };

  return (
    <>
      {selectedItem ? (
        <ItemCard item={selectedItem} onBack={handleBack} />
      ) : (
        <>
          <Search onSearch={handleSearch} />
          <ItemList searchQuery={searchQuery} onItemClick={handleItemClick} />
        </>
      )}
    </>
  );
}

export default App;