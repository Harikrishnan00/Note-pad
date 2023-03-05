import './style/user.css'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import MenuBar from '../../components/menu-bar/MenuBar'
import AddButton from '../../components/add-btn/AddButton'
import Notes from '../notes/Notes'
import SelectionHeader from '../../components/header/SelectionHeader'
import {useLocation} from 'react-router-dom'

function User() {
  const [isClickedBtn,setisClickedBtn] = useState(true)
  const [isSelectionBtnClicked,setisSelectionBtnClicked] = useState(true)
  const [isAddBtnClicked,setisAddBtnClicked] = useState(false)

  const userData = useLocation().state

  const isclickedHamMenu = (isClicked) => {
      setisClickedBtn(isClicked)
  }

  const handleSelectionNoteBtnclick = (data) =>{
      setisSelectionBtnClicked(data)
  }

  const handleAddBtnClick = (data) =>{
    setisAddBtnClicked(data)
  }

  return (
    <div className={isClickedBtn ? 'user-page-container ' : 'user-page-container active'}>
        {isSelectionBtnClicked ? <Header isclickedHamMenu={isclickedHamMenu}/> :<SelectionHeader />}
        <MenuBar isClickedBtn={isClickedBtn}/>
        <Notes handleAddBtnClick={handleAddBtnClick} handleSelectionNoteBtnclick={handleSelectionNoteBtnclick} isAddBtnClicked={isAddBtnClicked}/>
        <AddButton handleAddBtnClick={handleAddBtnClick}/>
    </div>
  )
}

export default User