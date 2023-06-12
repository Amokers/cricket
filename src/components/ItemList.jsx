import React, { useState, useEffect } from 'react';
import data from '../data';
import ItemCard from './ItemCard';

function ItemList({ searchQuery }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const results = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.pickup.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);

  const handleBack = () => {
    setSelectedItem(null);
  };

  const getImagePath = (itemId) => {
    return `src/img/${itemId}.webp`; 
  };

  return (
    <>
      {selectedItem ? (
        <ItemCard item={selectedItem} onBack={handleBack} />
      ) : (
        <div className='item_grid'>
          {searchResults.map((item) => (
            <div key={item.id} onClick={() => handleClick(item)} className="item__bloc" id={'item_' + item.id}>
              <img src={getImagePath(item.id)} className='item__sprite'/>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ItemList;
