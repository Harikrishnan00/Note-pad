import './style/searchbar.css'
import SearchIcon from '../../assets/icons/search.svg'
import React from 'react'

function SearchBar() {
  return (
    <div className='search-bar'>
        <input type="text" placeholder='Search'/>
        <img src={SearchIcon} alt="search" />
    </div>
  )
}

export default SearchBar