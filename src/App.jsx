import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} /> {/* Passer la fonction handleSearch au composant Navbar */}
      <ItemList searchQuery={searchQuery} />
    </>
  );
}

export default App;