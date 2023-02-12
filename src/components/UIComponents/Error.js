import './style/error.css'
import React from 'react'
import ErrorIcon from '../../assets/icons/information-circle-contained.svg'

function Error({errorMessage}) {
  return (
    <div className='error-message'>
        <img src={ErrorIcon} alt="error-icon"/>
        <p>{errorMessage}</p>
    </div>
  )
}

export default Error