import './style/profile.css'
import ProfilePhoto from '../../assets/images/moon-night.jpg'
import React from 'react'

function Profile({profileAddress}) {
  return (
    <div className='profile'>
        <img src={profileAddress} alt="" />
    </div>
  )
}

export default Profile