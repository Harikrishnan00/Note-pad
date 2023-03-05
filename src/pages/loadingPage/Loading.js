import './style/loading.css'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'react-router-dom'

function Loading() {

    const { userid } = useParams()

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

    const pageVariants ={
        from:{
            x:500,
            // scale:.8
        },
        to:{
            x:0,
            // scale:1,
            transition:{
                duration:1.2,
                type:"spring"
            }
        },
        exit:{
            x:-300,
            // scale:1,
            transition:{
                duration:1.2,
                type:"spring"
            }
        }
    }

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