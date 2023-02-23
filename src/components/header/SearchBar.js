import './style/searchbar.css'
import SearchIcon from '../../assets/icons/search.svg'
import React from 'react'
import {motion} from  'framer-motion'

function SearchBar() {
  return (
    <div className='search-bar'>
        <motion.input whileFocus={{
      scale:1.02
    }} type="text" placeholder='Search'/>
        <img src={SearchIcon} alt="search" />
    </div>
  )
}

export default SearchBar