import React from 'react'
import { show1,show2,show3 } from '../../assets/image'

const CardShow = () => {
  return (
    <div className='relative h-80 w-[90%]'>
        <img src={show1} className='absolute z-20 inset-0 m-auto'/>
        <img src={show2} className='absolute inset-0 m-auto'/>
        <img src={show3} className='absolute inset-0 m-auto'/>
    </div>
  )
}

export default CardShow