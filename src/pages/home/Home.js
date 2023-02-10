import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import './style/home.css'
import Login from './Login'
import SignUp from './SignUp'
import Blob from '../../components/UIComponents/Blob'
import Illustraion from '../../components/UIComponents/Illustration'
import Typed from 'typed.js'


function Home() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Partner","Partner"],
            startDelay:300,
            typeSpeed:200,
            backDelay:200,
            backSpeed:200,
            smartBackspace:true,
            loop: true
        }
        )
    }, [])

    const [isClicked,setisClicked] = useState(false)

    const showOrHideSignUpBox = (data) =>{
        setisClicked(data)
    }

    return (
        <>
            <div className='container'>
                <div className='left-section'>
                    <div className='blob-1'>
                        <Blob />
                    </div>
                    <div className="text-section">
                        <p className='text-on-left-section'>Your Note Taking  <span ref={el}></span> </p>
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
                    <Login showOrHideSignUpBox={showOrHideSignUpBox} />
                </div>
                {isClicked && (<div className="wrapper">
                    <SignUp showOrHideSignUpBox={showOrHideSignUpBox}/>
                </div>)}
            </div>
        </>
    )
}

export default Home