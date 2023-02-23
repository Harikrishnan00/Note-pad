import './style/menubar.css'
import NotesIcon from '../../assets/icons/notes.svg'
import ToDoIcon from '../../assets/icons/to-do.svg'
import RemainderIcon from '../../assets/icons/remainder.svg'
import LabelIcon from '../../assets/icons/labaled.svg'
import FavouratesIcon from '../../assets/icons/favourates.svg'
import React, { useEffect } from 'react'
import {easeInOut, motion,useAnimationControls} from 'framer-motion'

function MenuBar({isClickedBtn}) {

    const controls = useAnimationControls()

 
  useEffect(() => {
    controls.start({
      width: isClickedBtn ? 50 : 255
    })
  }, [isClickedBtn])


    return (
        <motion.div 
        className="menubar"
        animate={controls}
        >
            <div className={isClickedBtn ? "notes-button active-link"  : "notes-button active-link active"}>
                <img src={NotesIcon}alt="" />
                {!isClickedBtn && (<p>Notes</p>)}
            </div>
            <motion.div 
            className={isClickedBtn ? "notes-button "  : "notes-button active"}
            whileHover={{
                backgroundColor:"#d9d9d921"
            }}
            transition={{
                type:"tween",
                ease:"easeInOut",
                duration:.05
            }}
            >
                <img src={ToDoIcon}alt="" />
                {!isClickedBtn && (<p>To-Do</p>)}
            </motion.div>
            <div className={isClickedBtn ? "notes-button"  : "notes-button active"}>
                <img src={RemainderIcon}alt="" />
                {!isClickedBtn && (<p>Remainders</p>)}
            </div>
            <div className={isClickedBtn ? "notes-button"  : "notes-button active"}>
                <img src={LabelIcon}alt="" />
                {!isClickedBtn && (<p>Labales</p>)}
            </div>
            <div className={isClickedBtn ? "notes-button"  : "notes-button active"}>
                <img src={FavouratesIcon} alt="" />
                {!isClickedBtn && (<p>Favourates</p>)}
            </div>
        </motion.div>
    )
}

export default MenuBar