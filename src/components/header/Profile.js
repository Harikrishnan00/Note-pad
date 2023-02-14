import './style/profile.css'
import ProfilePhoto from '../../assets/images/moon-night.jpg'
import React from 'react'

function Profile() {
  return (
    <div className='profile'>
        <img src={ProfilePhoto} alt="" />
    </div>
  )
}

export default Profile