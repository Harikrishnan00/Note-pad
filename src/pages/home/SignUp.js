import React, { useState } from 'react'
import google from '../../assets/icons/google.png'
import github from '../../assets/icons/github.png'
import facebook from '../../assets/icons/facebook.png'
import cancel from '../../assets/icons/cancel.svg'
import './style/signup.css'
import auth from '../../firebase/Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'


function SignUp({showOrHideSignUpBox}) {

  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
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
      <div className="signup-box">
        <div className="cancel" onClick={()=>showOrHideSignUpBox(false)}>
          <img src={cancel} alt="" />
        </div>
        <div className="authentication-third-party-section">
          <p >Sign up with</p>
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
          <form action="" onSubmit={signUp}>
            <div className="input-for-email-and-pass">
              <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div className="keep-logged-in-and-forget">
              <div className="keep-me-logged-in">
                <input type="checkbox" />
                <p>keep me logged in</p>
              </div>
            </div>
            <button className='submit-button'>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp