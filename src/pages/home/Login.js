import React from 'react'
import './style/login.css'
import google from '../../assets/icons/google.png'
import github from '../../assets/icons/github.png'
import facebook from '../../assets/icons/facebook.png'


function Login() {
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
                <form action="">
                    <div className="input-for-email-and-pass">
                        <input type="email" placeholder='Email'/>
                        <input type="password" placeholder='Password'/>
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
            <div className="signup-btn">
                <p>Are you new here?</p>
            </div>
        </>
    )
}

export default Login