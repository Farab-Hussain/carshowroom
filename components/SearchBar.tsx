'use client'

import React from 'react';
import SearchMenuFacturer from './SearchMenuFacturer';
import { useState } from 'react';

const SearchBar = () => {
  const [manufacterer, setManufacterer] = useState('');
  const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenuFacturer
         manufacterer={manufacterer}
         setManufacterer={setManufacterer}
        />
      </div>
    </form>
  )
}

export default SearchBar