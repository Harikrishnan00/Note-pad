import './style/user.css'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import MenuBar from '../../components/menu-bar/MenuBar'
import AddButton from '../../components/add-btn/AddButton'
import Notes from '../notes/Notes'

function User() {
  const [isClickedBtn,setisClickedBtn] = useState(true)

  const isclickedHamMenu = (isClicked) => {
      setisClickedBtn(isClicked)
  }

  return (
    <div className={isClickedBtn ? 'user-page-container ' : 'user-page-container active'}>
        <Header isclickedHamMenu={isclickedHamMenu}/>
        <MenuBar isClickedBtn={isClickedBtn}/>
        <Notes />
        <AddButton />
    </div>
  )
}

export default User