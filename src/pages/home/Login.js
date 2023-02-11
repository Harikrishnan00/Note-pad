import React, { useState } from 'react'
import './style/login.css'
import google from '../../assets/icons/google.png'
import github from '../../assets/icons/github.png'
import facebook from '../../assets/icons/facebook.png'
import auth from '../../firebase/Firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider } from 'firebase/auth'
import Error from '../../components/UIComponents/Error'
import { useForm } from 'react-hook-form'

function Login({ showOrHideSignUpBox }) {

    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log(errors);
    const loginWithEmailAndPass = ({ email, password }) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.uid);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider() 

    const loginWithSocialMedia = (provider) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user.uid)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            })
    }

    return (
        <>

            <div className="authentication-third-party-section">
                <p >Sign in with</p>
                <div className="authentication-third-party">
                    <div className="google" onClick={()=>{
                        loginWithSocialMedia(googleProvider)
                    }}>
                        <img src={google} alt="google" />
                    </div>
                    <div className="github" onClick={()=>{
                        loginWithSocialMedia(githubProvider)
                    }}>
                        <img src={github} alt="github" />
                    </div>
                    <div className="facebook" onClick={()=>{
                        loginWithSocialMedia(facebookProvider)
                    }}>
                        <img src={facebook} alt="fb" />
                    </div>
                </div>
                <p className='or'>or</p>
            </div>
            <div className="login-with-email-and-pass">
                <form action="" onSubmit={handleSubmit(loginWithEmailAndPass)}>
                    <div className="input-for-email-and-pass">
                        <input type="text" placeholder='Email'
                            className={errors.email ? "email-input active" : "email-input"}
                            {...register("email", {
                                required: "Please enter Email",
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Please enter a valid Email"
                                }
                            })}
                        />
                        {errors.email && (<div className="error-section">
                            <Error errorMessage={errors.email.message} />
                        </div>)}
                        <input type="password" placeholder='Password'
                            className={errors.password ? "password-input active" : "password-input"}
                            {...register("password", {
                                required: "Please enter password",
                                minLength: {
                                    value: 8,
                                    message: "Password required minium 8 charcters"
                                },
                                pattern: {
                                    value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
                                    message: "Password must contain letter,digit,special charcter"
                                }
                            })}
                        />
                        {errors.password && (<div className="error-section">
                            <Error errorMessage={errors.password.message} />
                        </div>)}
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