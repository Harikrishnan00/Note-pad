import React from 'react'
import MenuButton from './MenuButton'
import Profile from './Profile'
import SearchBar from './SearchBar'

function Header() {
    return (
        <>
            <MenuButton />
            <SearchBar />
            <Profile />
        </>
    )
}

export default Header