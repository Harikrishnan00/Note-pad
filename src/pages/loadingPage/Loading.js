import './style/loading.css'
import React from 'react'
import { motion } from 'framer-motion'

function Loading() {
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

    return (
        <div className='loading-container'>
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
        </div>
    )
}

export default Loading