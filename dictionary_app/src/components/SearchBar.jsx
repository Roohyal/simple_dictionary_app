
import React from 'react'
import { useState } from 'react'

function SearchBar({onSearch}) {
 const [query, setQuery] = useState(' ');

 const handleInputChange = (e) => {
    setQuery(e.target.value);
 };

const handleSearch = () => {
    onSearch(query);
};
const handleKeyPress = (e) =>{
  if(e.key === 'Enter'){
    handleSearch();
  };
}

  return (

    <div>
    <div className='search-bar'>
     <input
     type="text"
     value={query}
     onChange={handleInputChange}
     onKeyPress={handleKeyPress}
     placeholder="Enter a word"
     className='search-input'
     />
     <button onClick={handleSearch} className='search-button'>
      Search</button>
    </div>
    </div>
  )
}

export default SearchBar