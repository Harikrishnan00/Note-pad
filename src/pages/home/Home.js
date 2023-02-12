import './style/home.css'
import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import Blob from '../../components/UIComponents/Blob'
import Illustraion from '../../components/UIComponents/Illustration'
import Login from './Login'
import SignUp from './SignUp'
import Typed from 'typed.js'
import { motion, AnimatePresence } from 'framer-motion'

function Home() {

    const el = useRef(null); // used to refer the text section to be animated in typed js

    // useEffect is used play typed animation when the component is loaded
    useEffect(() => {
        // Typed animation initialization
        const typed = new Typed(el.current, {
            strings: ["Partner", "Partner"],
            startDelay: 300,
            typeSpeed: 200,
            backDelay: 200,
            backSpeed: 200,
            smartBackspace: true,
            loop: true
        }
        )
    }, [])

    const [isClicked, setisClicked] = useState(false) // To check whether "Are you new here" clicked or not 

    // function used to change the state of isClicked when "Are you new here" clicked 
    const showOrHideSignUpBox = (data) => {
        setisClicked(data)
    }

    // Animation varients for wrapper
    const wrapperVarients = {
        from: {
            clipPath: "circle(12.2% at 100% 0)",
            opacity: 0
        },
        to: {
            clipPath: "circle(141.4% at 100% 0)",
            opacity: 1,
            transition: {
                duration: .8,
                when: "beforeChildren"
            }
        },
        exit:{
            clipPath: "circle(12.2% at 100% 0)",
            opacity:0,
            transition:{
                duration:.8,
                when: "afterChildren"
            }
        }
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
                 <AnimatePresence> 
                    {isClicked && 
                    (<motion.div
                        className="wrapper "
                        variants={wrapperVarients}
                        initial="from"
                        animate="to"
                        exit="exit"
                    >
                        <SignUp showOrHideSignUpBox={showOrHideSignUpBox} />
                    </motion.div>)}
                </AnimatePresence>
            </div>
        </>
    )
}

export default Home