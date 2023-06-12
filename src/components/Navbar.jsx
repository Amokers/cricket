import React from 'react';
import Search from './Search';

function Navbar({ onSearch }) {
  return (
    <nav>
      <h1 className="nav__title">Cricket Encyclopedia</h1>
      <Search onSearch={onSearch} /> {/* Passer la fonction onSearch du composant parent */}
    </nav>
  );
}

export default Navbar;