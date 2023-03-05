import React, { useState } from 'react'
import './style/menufornotes.css'
import Menuitem from './Menuitem'
import ImageIcon from '../../assets/icons/Image.svg'
import EditIcon from '../../assets/icons/edit.svg'
import VideoIcon from '../../assets/icons/video.svg'
import ColorSelectionIcon from '../../assets/icons/Paint Color Palette.svg'
import FavouratesIcon from '../../assets/icons/fav.svg'
import LabaledIcon from '../../assets/icons/label.svg'
import DeleteIcon from '../../assets/icons/delete.svg'
import PinIcon from '../../assets/icons/pin-icon.svg'
import MenuNoteIcon from '../../assets/icons/notes-menu.svg'


function MenuForNotes() {

    const [isMenuButtonclicked,setisMenuButtonclicked] = useState(false)
    const [isColorButtonclicked,setisColorButtonclicked] = useState(false)
    let iconsArray = [
        [DeleteIcon,"Delete"],
        [ColorSelectionIcon,"Color"],
        [EditIcon,"Edit"],
        [ImageIcon,"Image"],
        [VideoIcon,"Video"],
        [LabaledIcon,"Label"],
        [FavouratesIcon,"Favourate"],
        [PinIcon,"Pin"]
    ]

    let colorArray =[
        "#D7AEFB",
        "#CBF0F8",
        "#A7FFEB",
        "#CCFF90",
        "#FFF475",
        "#FBBC04",
        "#F28B82",
        "#AECBFA",
        "#E8EAED",
        "#E6C9A8",
        "#FDCFE8"
    ]

    const handeleColorSelection = (data) =>{
        setisColorButtonclicked(data)
    }

    return (
        <>
            <div className="menu-note-container">
                <div className="menu-note-button" onClick={()=>setisMenuButtonclicked(!isMenuButtonclicked)}>
                    <img src={MenuNoteIcon} alt="" />
                </div>
                {iconsArray.map(([iconName,name],index)=>{
                    return(
                        <Menuitem handeleColorSelection={handeleColorSelection} iconName={iconName} name={name} index={index} key={index} rotation={ (360/iconsArray.length) * index } open={isMenuButtonclicked}/>
                    )
                })}
                {colorArray.map((data,index)=>{
                    return <div className='color-item' key={index} style={{
                        backgroundColor:data,
                        transform: `rotate(${(isColorButtonclicked) ? (360/colorArray.length) *index : 45}deg) translate(${isColorButtonclicked? "300%" : "175%"})`,
                        visibility:isMenuButtonclicked ? "visible" :"hidden"
                    }}>

                    </div>
                })}
            </div>
        </>
    )
}

export default MenuForNotes