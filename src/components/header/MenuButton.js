import './style/menubutton.css'
import React, { useEffect, useState } from 'react'
import HamBurgerIcon from "../../assets/icons/hamburger-menu.svg"
import { motion, useAnimationControls } from "framer-motion"

function MenuButton() {
  const controls = useAnimationControls()

  const [isClicked, setisClicked] = useState(false)
  const [isShow, setisShow] = useState(false)

  // const expandMenuButtonAnimation = () =>{

  // setisClicked(!isClicked)
  // controls.start({
  //   width:isClicked ? 250 : 50
  // })
  // setisShow(!isShow)

  // }
  useEffect(() => {
    controls.start({
      width: isClicked ? 250 : 50
    })
  }, [isClicked])


  return (
    <motion.div
      className='menu-button'
      animate={controls}
      onClick={() =>setisClicked(!isClicked)}
    >
      <img src={HamBurgerIcon} alt="menu" />
      {isClicked && (<p>Menu</p>) }
    </motion.div>
  )
}

export default MenuButton