// App.jsx
import React, { useState } from 'react';
import Search from './components/Search';
import ItemList from './components/ItemList';
import ItemCard from './components/ItemCard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedItem(null);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBack = () => {
    // Ne modifiez pas la recherche ici pour éviter des problèmes de rendu
    setSelectedItem(null);
  };

  return (
    <>
      {selectedItem ? (
        <ItemCard item={selectedItem} onBack={handleBack} />
      ) : (
        <>
          <Search searchQuery={searchQuery} onSearch={handleSearch} />
          <ItemList searchQuery={searchQuery} onItemClick={handleItemClick} />
        </>
      )}
    </>
  );
}

export default App;
