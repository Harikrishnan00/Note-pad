import './style/addbutton.css'
import React from 'react'
import AddIcon from '../../assets/icons/add.svg'
import {motion} from "framer-motion"

function AddButton({handleAddBtnClick}) {
  return (
    <motion.div 
    className='add-button'
    whileTap={{
      scale:1.15
    }}
    onClick={()=>{handleAddBtnClick(true)}}
    >
        <img src={AddIcon} alt="" />
    </motion.div>
  )
}

export default AddButton