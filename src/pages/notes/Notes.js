import React, { useState, useEffect } from 'react'
import './style/notes.css'
import SelectIcon from '../../assets/icons/select-btn.svg'
import PinIcon from '../../assets/icons/pin-icon.svg'
import FavourateIcon from '../../assets/icons/fav.svg'
import Image from '../../assets/images/wp2839729-retro-wallpaper.png'
import MenuForNotes from '../../components/notes-menu/MenuForNotes'
import NoteAddSection from './NoteAddSection'


function Notes({ handleSelectionNoteBtnclick,isAddBtnClicked,handleAddBtnClick }) {

    return (
        <>
            <div className="notes-container">
                <div className="note-section">
                    <p>Dec 22, 2022  </p>
                    <div className="note-box-container">
                        {[1].map((data, index) => {
                            return (
                                <div className="note-box" key={index}>
                                    <img className='selection-btn' src={SelectIcon} alt="" onClick={() => {
                                        document.querySelectorAll('.note-box')[index].classList.toggle("border-color")
                                        handleSelectionNoteBtnclick(false)
                                    }} />
                                    {/* <img className='note-image' src={Image} alt="" /> */}
                                    <video controls>
                                        <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
                                    </video>
                                    <MenuForNotes />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non porro saepe ipsum officiis et maiores voluptatibus dolores iure! Cupiditate aliquam aperiam omnis illo quidem repellendus aut ut cumque consequatur.0</p>
                                    {/* <div className="note-bottom-icons">
                                        <img src={FavourateIcon} alt="" />
                                        <img src={PinIcon} alt="" />
                                    </div> */}
                                </div>)
                        })}
                    </div>
                </div>
            </div>
            <NoteAddSection isAddBtnClicked={isAddBtnClicked} handleAddBtnClick={handleAddBtnClick}/>
        </>
    )
}

export default Notes