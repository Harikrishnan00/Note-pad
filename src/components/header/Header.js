import './style/header.css'
import React from 'react'
import MenuButton from './MenuButton'
import Profile from './Profile'
import SearchBar from './SearchBar'

function Header() {
    return (
        <div className='Header-container'>
            <MenuButton />
            <SearchBar />
            <Profile />
        </div>
    )
}

export default Header