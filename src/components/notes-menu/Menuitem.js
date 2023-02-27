import React from 'react'

function Menuitem({data,rotation,open}) {
  return (
    <div className="item"  style={{
        backgroundColor:"blue",
        transform:`rotate(${open ? rotation : 0}deg) translate(${open ? "170%": 0})`
    }}>
    </div>
  )
}

export default Menuitem