import React, { useEffect, useState } from 'react'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

function Menuitem({ iconName, name, rotation, open,handeleColorSelection,index }) {
  const [isColorButtonclicked,setisColorButtonclicked] = useState(false)

  useEffect(()=>{
    handeleColorSelection(isColorButtonclicked)
  },[isColorButtonclicked])

  return (
    <>
      <div className="item" data-tooltip-id="my-tooltip"  
      onClick={index===1 ? ()=>{
        setisColorButtonclicked(!isColorButtonclicked)
      } 
      : ""}  data-tooltip-content={name} 
      style={{
        transform: `rotate(${open ? rotation : 0}deg) translate(${open ? "170%" : 0})`
      }}>
        <img src={iconName} alt="" style={{
          transform: `rotate(-${rotation}deg)`
        }} />
      </div>
      <Tooltip  place="top" variant='light' delayShow={.0001}  id="my-tooltip" offset={6} className="tooltip" style={{
        fontSize:".75rem",
        padding:".2rem .3rem"
      }}/>
    </>
  )
}

export default Menuitem