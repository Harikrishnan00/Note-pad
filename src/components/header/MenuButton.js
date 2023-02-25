import './style/menubutton.css'
import React, { useEffect, useState } from 'react'
import HamBurgerIcon from "../../assets/icons/hamburger-menu.svg"
import { motion, useAnimationControls } from "framer-motion"

function MenuButton({isclickedHamMenu}) {
  const controls = useAnimationControls()

  const [isClicked, setisClicked] = useState(false)
 
  useEffect(() => {
    if(window.innerWidth >768 ){
      controls.start({
      width: isClicked ? 250 : 50
    })}
  }, [isClicked])


  return (
    <motion.div
      className='menu-button'
      animate={controls}
      onClick={() =>{
        setisClicked(!isClicked)
        isclickedHamMenu(isClicked)
      }}
      whileTap={{
        scale:1.15
      }}
    >
      <img src={HamBurgerIcon} alt="menu" />
      {(isClicked && window.innerWidth >768) && (<p>Menu</p>) }
    </motion.div>
  )
}

export default MenuButton