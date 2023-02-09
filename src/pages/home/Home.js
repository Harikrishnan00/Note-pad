import React from 'react'
import './style/home.css'
import Login from './Login'
import Blob from '../../components/UIComponents/Blob'
import Illustraion from '../../components/UIComponents/Illustration'


function Home() {
    return (
        <>
            <div className='container'>
                <div className='left-section'>
                    <div className='blob-1'>
                        <Blob />
                    </div>
                    <div className="text-section">
                        <p className='text-on-left-section'>Your Note Taking  <span>Partner</span> </p>
                    </div>
                    <div className='blob-2'>
                            <Blob />
                    </div>
                    <div className='blob-3'>
                        <Blob />
                    </div>
                    <div className="left-section-illustration">
                        <Illustraion />
                    </div>
                </div>
                <div className='right-section'>
                    <Login />
                </div>
                <div className="wrapper">

                </div>
            </div>
        </>
    )
}

export default Home