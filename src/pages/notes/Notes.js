import React from 'react'
import './style/notes.css'
import SelectIcon from '../../assets/icons/select-btn.svg'
import noteMenuIcon from '../../assets/icons/notes-menu.svg'
import Image from '../../assets/images/wp2839729-retro-wallpaper.png'
import MenuForNotes from '../../components/notes-menu/MenuForNotes'

function Notes() {

    return (
        <>
            <div className="notes-container">
                <div className="note-section">
                    <p>Dec 22, 2022 </p>
                    <div className="note-box-container">
                        {[1, 2, 3, 4, 5].map((data,key) => {
                            return (
                                <div className="note-box" key={key}>
                                    <img className='selection-btn' src={SelectIcon} alt="" onClick={()=>{
                                        document.querySelectorAll('.note-box')[key].classList.toggle("border-color")
                                    }} />
                                    <img className='note-image' src={Image} alt="" />
                                    <img className='note-menu-icon' src={noteMenuIcon} alt="" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non porro saepe ipsum officiis et maiores voluptatibus dolores iure! Cupiditate aliquam aperiam omnis illo quidem repellendus aut ut cumque consequatur.0</p>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes