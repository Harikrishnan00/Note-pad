import './style/loading.css'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useLocation } from 'react-router-dom'
import firebaseConfigure from '../../firebase/Firebase'
import { ref, set ,onValue} from "firebase/database"
import {useNavigate} from 'react-router-dom'

function Loading() {
    const { userid } = useParams()
    const navigate = useNavigate()
    const [isUserExist,setisUserExist] = useState(true)
    
    const { name, email, profileAddres } = useLocation().state

    const boxVarients = {
        from: {
            scale: 1,
            transition: {
                staggerChildren: 2.2,
            }
        },
        to: {
            scale: 1.1,
            transition: {
                duration: 1.5,
                when: "afterChildren",
                repeat: Infinity,
                type: "spring",
                damping: 5
            }
        }
    }

    const itemVariants = {
        item1: {
            x: "180%",
            transition: {
                duration: 1.5,
                repeat: Infinity,
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        },
        item2: {
            y: "180%",
            transition: {
                duration: 1.5,
                repeat: Infinity,
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        },
        item3: {
            y: "-180%",
            transition: {
                duration: 1.5,
                repeat: Infinity,
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        }, item4: {
            x: "-180%",
            transition: {
                duration: 1.5,
                repeat: Infinity,
                type: "spring",
                damping: 10,
                stiffness: 100
            }
        }
    }

    const pageVariants = {
        from: {
            x: 500
        },
        to: {
            x: 0,
            transition: {
                duration: 1.2,
                type: "spring"
            }
        },
        exit: {
            x: -300,
            transition: {
                duration: 1.2,
                type: "spring"
            }
        }
    }

    const checkUserDataInDbOrNot = () =>{
         onValue(ref(firebaseConfigure.database, 'users/'), (snapshot) => {
            const data = snapshot.hasChild(userid);
            setisUserExist(data)
        })
    }

    useEffect(() => {
        checkUserDataInDbOrNot()
    }, [userid])


    const settingFirebaseDb = () => {
        set(ref(firebaseConfigure.database, 'users/' + userid), {
            name: name,
            email: email,
            profilePicAddres: profileAddres,
            notes:"",
            todos:"",
            remainders:""
        });
    }

    const retrievDataFromFirebaseDb = () =>{
        onValue(ref(firebaseConfigure.database, 'users/'+ userid ), (snapshot) => {
            const data = snapshot.val();
            navigate(`/${data.name}/notes`,{
                state:{
                    userdata:data,
                    userId:userid
                }
            })
        })
    }

    useEffect(() => {

        if(isUserExist){
            retrievDataFromFirebaseDb()
        }else{
            settingFirebaseDb()
        }

    }, [isUserExist])

    return (
        <AnimatePresence >
            <motion.div
                className='loading-container'
                variants={pageVariants}
                initial="from"
                animate="to"
                exit="exit"
            >
                <motion.div
                    className='center-box'
                    variants={boxVarients}
                    initial="from"
                    animate="to"
                >
                    <motion.div
                        className="item-1"
                        variants={itemVariants}
                        animate="item1"
                    ></motion.div>
                    <motion.div
                        className="item-2"
                        variants={itemVariants}
                        animate="item2"
                    ></motion.div>
                    <motion.div
                        className="item-3"
                        variants={itemVariants}
                        animate="item3"
                    ></motion.div>
                    <motion.div
                        className="item-4"
                        variants={itemVariants}
                        animate="item4"

                    ></motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Loading