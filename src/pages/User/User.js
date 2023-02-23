import './style/user.css'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import MenuBar from '../../components/menu-bar/MenuBar'
import AddButton from '../../components/add-btn/AddButton'

function User() {
  const [isClickedBtn,setisClickedBtn] = useState(true)

  const isclickedHamMenu = (isClicked) => {
      setisClickedBtn(isClicked)
  }

  return (
    <div className='user-page-container'>
        <Header isclickedHamMenu={isclickedHamMenu}/>
        <MenuBar isClickedBtn={isClickedBtn}/>
        <AddButton />
    </div>
  )
}

export default User