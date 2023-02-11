import React, { useState } from 'react'
import google from '../../assets/icons/google.png'
import github from '../../assets/icons/github.png'
import facebook from '../../assets/icons/facebook.png'
import cancel from '../../assets/icons/cancel.svg'
import './style/signup.css'
import auth from '../../firebase/Firebase'
import {createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from 'firebase/auth'
import { useForm } from 'react-hook-form'
import Error from '../../components/UIComponents/Error'


function SignUp({showOrHideSignUpBox}) {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const signUp = ({email,password}) => {
        
        createUserWithEmailAndPassword(auth, email, password)
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
                console.log(errorMessage)
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(email);
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
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
          <form action="" onSubmit={handleSubmit(signUp)}>
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
                                    value:8,
                                    message:"Password required minium 8 charcters"
                                },
                                pattern:{
                                    value:/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
                                    message:"Password must contain letter,digit,special charcter"
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
            </div>
            <button className='submit-button'>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp