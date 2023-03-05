import './style/login.css'
import google from '../../assets/icons/google.png'
import github from '../../assets/icons/github.png'
import facebook from '../../assets/icons/facebook.png'
import firebaseConfigure from '../../firebase/Firebase'
import {
    signInWithRedirect,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    FacebookAuthProvider
} from 'firebase/auth'
import Error from '../../components/UIComponents/Error'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login({ showOrHideSignUpBox }) {

    const [userId, setUserId] = useState("")
    const [isChecked,setisChecked] = useState(false)

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm() // Destructuring useForm

    useEffect(()=>{
        if(isChecked&&userId){
            localStorage.setItem("id",userId)
        }
    },[userId])
    
    // Function to perform login with email and pass
    const loginWithEmailAndPass = ({ email, password }) => {

        signInWithEmailAndPassword(firebaseConfigure.auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUserId(user.uid)
                navigate(`user/${user.uid}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })

    }

    // Initiliazing  the auth provider ojects from firebase to variables
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider()

    // Changing the signin method(withRedirect/withPopup) depends on the screen size of device
    let loginWithPopUpOrRedirect

    if (window.innerWidth < 768) {
        loginWithPopUpOrRedirect = signInWithRedirect
    } else {
        loginWithPopUpOrRedirect = signInWithPopup
    }

    // Function to  perform login with social accounts depends on which provider is clicked
    const loginWithSocialMedia = (provider) => {
        loginWithPopUpOrRedirect(firebaseConfigure.auth, provider)
            .then(async (result) => {
                const user = result.user;
                // user.displayName
                // user.uid
                // user.photoURL
                setUserId(user.uid)
                console.log(userId);
                navigate(`user/${user.uid}`)
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
                    <motion.div
                        className="google"
                        whileTap={{
                            scale: 1.2
                        }}
                        onClick={() => {
                            loginWithSocialMedia(googleProvider)
                        }}>
                        <img src={google} alt="google" />
                    </motion.div>
                    <motion.div
                        className="github"
                        whileTap={{
                            scale: 1.2
                        }}
                        onClick={() => {
                            loginWithSocialMedia(githubProvider)
                        }}>
                        <img src={github} alt="github" />
                    </motion.div>
                    <motion.div
                        className="facebook"
                        whileTap={{
                            scale: 1.2
                        }}
                        onClick={() => {
                            loginWithSocialMedia(facebookProvider)
                        }}>
                        <img src={facebook} alt="fb" />
                    </motion.div>
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
                            <input type="checkbox" onClick={(e)=>{setisChecked(e.target.checked)}}/>
                            <p>keep me logged in</p>
                        </div>
                        <div className="forgot">
                            <p>forget password?</p>
                        </div>
                    </div>
                    <motion.button
                        className='submit-button'
                        whileTap={{
                            scale: 1.1
                        }}
                    >Sign In</motion.button>
                </form>
            </div>
            <div className="signup-btn" onClick={() =>
                showOrHideSignUpBox(true)}>
                <p>Are you new here?</p>
            </div>
        </>
    )
}

export default Login