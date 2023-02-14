import './style/user.css'
import React from 'react'
import Header from '../../components/header/Header'
import MenuBar from '../../components/menu-bar/MenuBar'
import AddButton from '../../components/add-btn/AddButton'

function User() {
  return (
    <div className='user-page-container'>
        <Header />
        <MenuBar />
        <AddButton />
    </div>
  )
}

export default User