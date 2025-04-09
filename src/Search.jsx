import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchClick = () => {
    onSearch(searchTerm, false);
  };
  const handleAdvancedSearchClick = () => {
    onSearch(searchTerm, true);
  };



  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Поиск по названию"/>
      <button onClick={handleSearchClick}>Искать</button>
      <button onClick={handleAdvancedSearchClick}>Расширенный поиск</button>
    </div>
  );
}

export default Search;
