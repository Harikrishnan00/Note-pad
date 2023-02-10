import React, { useState } from 'react'
import './style/login.css'
import google from '../../assets/icons/google.png'
import github from '../../assets/icons/github.png'
import facebook from '../../assets/icons/facebook.png'
import auth from '../../firebase/Firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

function Login({ showOrHideSignUpBox }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (e) => {
        e.preventDefault()
        console.log("first")
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }
    return (
        <>

            <div className="authentication-third-party-section">
                <p >Sign in with</p>
                <div className="authentication-third-party">
                    <div className="google">
                        <img src={google} alt="google" />
                    </div>
                    <div className="github">
                        <img src={github} alt="github" />
                    </div>
                    <div className="facebook">
                        <img src={facebook} alt="fb" />
                    </div>
                </div>
                <p className='or'>or</p>
            </div>
            <div className="login-with-email-and-pass">
                <form action="" onSubmit={login}>
                    <div className="input-for-email-and-pass">
                        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="keep-logged-in-and-forget">
                        <div className="keep-me-logged-in">
                            <input type="checkbox" />
                            <p>keep me logged in</p>
                        </div>
                        <div className="forgot">
                            <p>forget password?</p>
                        </div>
                    </div>
                    <button className='submit-button'>Sign In</button>
                </form>
            </div>
            <div className="signup-btn" onClick={() => showOrHideSignUpBox(true)}>
                <p>Are you new here?</p>
            </div>
        </>
    )
}

export default Login