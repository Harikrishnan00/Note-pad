import './style/signup.css'
import google from '../../assets/icons/google.png'
import github from '../../assets/icons/github.png'
import facebook from '../../assets/icons/facebook.png'
import cancel from '../../assets/icons/cancel.svg'
import Error from '../../components/UIComponents/Error'
import auth from '../../firebase/Firebase'
import {createUserWithEmailAndPassword,signInWithPopup,signInWithRedirect, GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from 'firebase/auth'
import { useForm } from 'react-hook-form'
import {motion} from 'framer-motion'

function SignUp({showOrHideSignUpBox}) {

    const { register, handleSubmit, formState: { errors } } = useForm() // Destructuring useForm

    // Function to perform signup with email and pass
    const signUpWithEmailAndPass = ({email,password}) => {
        
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

    // Initiliazing  the auth provider ojects from firebase to variables
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider() 

    // Changing the signin method(withRedirect/withPopup) depends on the screen size of device
    let loginWithPopUpOrRedirect 

    if(window.innerWidth<768){
        loginWithPopUpOrRedirect = signInWithRedirect
        console.log("hello1")
    }else{
        loginWithPopUpOrRedirect = signInWithPopup
        console.log("hello2")
    }

     // Function to  perform login with social accounts depends on which provider is clicked
    const loginWithSocialMedia = (provider) => {
      loginWithPopUpOrRedirect(auth, provider)
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

    // Animation varients for Sigup box
    const innerBoxVarients= {
      from:{
        scale:0,
        opacity:0
      },
      to:{
        scale:[.5,1.1,1],
        opacity:[.5,1,1],
        transition:{
          duration:.8
        }
      },
      exit:{
        scale:[1.1,0],
        opacity:[1.1,0],
        transition:{
          duration:.8
        }
      }
    }

  return (
    <>
      <motion.div 
      className="signup-box"
      variants={innerBoxVarients}
      >
        <div className="cancel" onClick={()=>{
          showOrHideSignUpBox(false)}
        }>
          <img src={cancel} alt="" />
        </div>
        <div className="authentication-third-party-section">
          <p >Sign up with</p>
          <div className="authentication-third-party">
            <motion.div 
            className="google"
            whileTap={{
              scale:1.2
            }} 
            onClick={()=>{
              loginWithSocialMedia(googleProvider)
            }}>
              <img src={google} alt="google" />
            </motion.div>
            <motion.div 
            className="github"
            whileTap={{
              scale:1.2
            }} 
            onClick={()=>{
              loginWithSocialMedia(githubProvider)
            }}>
              <img src={github} alt="github" />
            </motion.div>
            <motion.div 
            className="facebook"
            whileTap={{
              scale:1.2
            }} 
            onClick={()=>{
              loginWithSocialMedia(facebookProvider)
            }}>
              <img src={facebook} alt="fb" />
            </motion.div>
          </div>
          <p className='or'>or</p>
        </div>
        <div className="login-with-email-and-pass">
          <form action="" onSubmit={handleSubmit(signUpWithEmailAndPass)}>
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
            <motion.button 
            className='submit-button'
            whileTap={{
              scale:1.1
            }}
            >Sign Up</motion.button>
          </form>
        </div>
      </motion.div>
    </>
  )
}

export default SignUp