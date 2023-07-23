import React from 'react'
import { galleryImg } from '../../assets/image'

const Exhibition = () => {
  return (
    <div>
        <div className='bg-gradient-to-r from-sky-500 via-cyan-300 to-orange-300 h-80 p-8'>
            <div className='h-full w-full relative text-neutral-50'>
                <img src={galleryImg} className='h-full w-full absolute brightness-50'/>
                <div className='absolute flex top-8 gap-7'>
                    <p className='w-3.5 h-3.5 bg-white rounded-full ml-1'></p>
                    <p className='text-xl w-60'>Monalisa redefined in style.</p>
                </div>
                <div className='absolute flex gap-1 top-24 mr-2.5'>
                    <p className='text-4xl ml-1'>01</p>
                    <div className='text-xs'>
                        <p className='mb-5'>Start on : 08:00 GTS . Monday</p>
                        <p>GET EXCLUSIVE VIEWING  CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                        <div className='flex gap-3.5 items-center justify-end mt-3 '>
                            <a className='underline underline-offset-4'>See more</a>
                            <button className='border rounded-xl px-1.5 py-2'>Set a reminder</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Exhibition