import React, { useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import slides from './index'


const Slider = () => {
    const move = useSpring({
        x: 1000,
        duration: 500,
        ease: "linear",
        repeat: Infinity,
    })
    return (
        <motion.div className='mt-8'>
            <motion.div className='flex items-center gap-x-4'>
                {slides.map(slide => {
                    return (
                        <motion.div variants={move}>
                            <img src={slide} />
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}

export default Slider;