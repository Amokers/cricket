import React, { useState, useEffect } from 'react';
import data from '../data';

function ItemList({ searchQuery, onItemClick }) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.pickup.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);

  const getImagePath = (itemId) => {
    return `src/img/${itemId}.webp`;
  };

  return (
    <div className='item_grid'>
      {searchResults.map((item) => (
        <div
          key={item.id}
          onClick={() => onItemClick(item)} 
          className="item__bloc"
          id={'item_' + item.id}
        >
          <img src={getImagePath(item.id)} className='item__sprite' alt='' />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
