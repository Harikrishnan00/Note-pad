import React from 'react'
import './style/noteaddsection.css'
import PinIcon from '../../assets/icons/pin-icon.svg'
import ImageIcon from '../../assets/icons/Image.svg'
import VideoIcon from '../../assets/icons/video.svg'
import FavourateIcon from '../../assets/icons/fav.svg'
import ColorIcon from '../../assets/icons/Paint Color Palette.svg'
import LabalIcon from '../../assets/icons/label.svg'
import DefaultIcon from '../../assets/icons/default.svg'

import { motion, AnimatePresence } from 'framer-motion'

function NoteAddSection({ isAddBtnClicked,handleAddBtnClick }) {

    let colorArray = [
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

    const wrapperVarients = {
        from: {
            clipPath: "circle(12.2% at 100% 0)",
            opacity: 0
        },
        to: {
            clipPath: "circle(141.4% at 100% 0)",
            opacity: 1,
            transition: {
                duration: .8,
                when: "beforeChildren"
            }
        },
        exit:{
            clipPath: "circle(12.2% at 100% 0)",
            opacity:0,
            transition:{
                duration:.8,
                when: "afterChildren"
            }
        }
    }

    const innerBoxVarients= {
        from:{
          scale:0,
          opacity:0
        },
        to:{
          scale:[.5,1.1,1],
          opacity:[.5,1,1],
          transition:{
            duration:.8
          }
        },
        exit:{
          scale:[1.1,0],
          opacity:[1.1,0],
          transition:{
            duration:.8
          }
        }
      }

    console.log(isAddBtnClicked)
    const handleTextAreaAutoResize = (e) => {
        e.target.style.height = "5px"
        if (e.target.scrollHeight < 350) {
            e.target.style.height = (e.target.scrollHeight) + "px"
            e.target.style.overflowY = "hidden"

        } else {
            e.target.style.height = "350px"
            e.target.style.overflowY = "scroll"
        }
    }

    return (
        <>
            <AnimatePresence>
                {isAddBtnClicked && 
                (<motion.div className='notes-add-wrapper'
                variants={wrapperVarients}
                initial="from"
                animate="to"
                exit="exit"
                >
                    <motion.div variants={innerBoxVarients} className="note-add-container" >
                        <div className="note-add-box">
                            <div className="note-input-section">
                                <input type="text" placeholder="Title" />
                                <textarea name="" id="" cols="15" rows="10" placeholder='Enter note...'
                                    onKeyUp={handleTextAreaAutoResize}
                                ></textarea>
                                <img src={PinIcon} alt="pin" />
                            </div>
                            <div className="note-box-menu-section">
                                <div className="note-add-box-menu">
                                    <img src={ImageIcon} alt="" />
                                    <img src={VideoIcon} alt="video" />
                                    <img src={ColorIcon} alt="color" />
                                    <img src={FavourateIcon} alt="fav" />
                                    <img src={LabalIcon} alt="label" />
                                </div>
                                <p onClick={()=>{handleAddBtnClick(false)}}>close</p>
                            </div>
                        </div>
                        {true&&(<div className="color-selection-box-container">
                            <div className="color-default-btn">
                                <img src={DefaultIcon} alt="" />
                            </div>
                            {colorArray.map((color, index) => {
                                return <div className="color-btn" key={index} style={{
                                    backgroundColor: color
                                }} />
                            })}
                        </div>)}
                    </motion.div>
                </motion.div>)}
            </AnimatePresence>
        </>
    )
}

export default NoteAddSection