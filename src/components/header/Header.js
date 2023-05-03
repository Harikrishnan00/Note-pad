import './style/header.css'
import React from 'react'
import MenuButton from './MenuButton'
import Profile from './Profile'
import SearchBar from './SearchBar'

function Header({isclickedHamMenu,userData}) {
    
    return (
        <div className='Header-container'>
            <MenuButton isclickedHamMenu={isclickedHamMenu}/>
            <SearchBar />
            <Profile profileAddress={userData.userdata.profilePicAddres}/>
        </div>
    )
}

export default Header