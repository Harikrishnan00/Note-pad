import React, { useState } from 'react'
import './style.css'
import {motion,useAnimation} from 'framer-motion'
import Menuitem from './Menuitem'



function MenuForNotes() {

    const [state,setstate] = useState(false)
    return (
        <>
            <div className="menu-note-container">
                <div className="menu-note-button" onClick={()=>setstate(!state)}>

                </div>
                {["icon1","icon2","icon3","icon4","icon5","icon6"].map((data,key)=>{
                    return(
                        <Menuitem data={data} key={key} rotation={ (360/6) * key } open={state}/>
                    )
                })}
            </div>
        </>
    )
}

export default MenuForNotes