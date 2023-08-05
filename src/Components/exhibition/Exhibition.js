import React from 'react'
import { galleryImg } from '../../assets/image'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const Exhibition = () => {
  return (
    <div>
        <div className='bg-gradient-to-r from-sky-500 via-cyan-300 to-orange-300 h-80 p-8 lg:h-[48rem] lg:px-[7.5rem] '>
            <p className='hidden lg:block text-[2.5rem] font-medium text-[#ffffff] underline underline-offset-[1.06rem] mb-4'>See Upcoming Auctions and Exhibitions</p>
            <div className='h-full w-full relative text-neutral-50 lg:h-[35rem] '>
                <img src={galleryImg} className='h-full w-full absolute brightness-50'/>
                <div className='absolute flex top-8 gap-7 lg:top-[18rem] lg:mx-[4.31rem]'>
                    <p className='w-3.5 h-3.5 bg-white rounded-full ml-1'></p>
                    <p className='text-xl lg:text-[1.82rem] w-60'>Monalisa redefined in style.</p>
                </div>
                <div className='absolute flex gap-1 top-24 mr-2.5 lg:top-[23.77rem] lg:mx-[2.31rem]'>
                    <p className='text-4xl lg:text-[4.22rem] ml-1'>01</p>
                    <div className='text-xs'>
                        <p className='mb-5 lg:text-[0.84rem]'>Start on : 08:00 GTS . Monday</p>
                        <p className='lg:text-[0.99rem] '>GET EXCLUSIVE VIEWING  CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                        <div className='flex gap-3.5 items-center justify-end mt-3 '>
                            <a className='underline underline-offset-4'>See more</a>
                            <button className='border rounded-xl px-1.5 py-2'>Set a reminder</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex w-full  justify-between'>
                <div className='flex items-center'>
                 
                </div>
                <div className='flex'>
                    <button className='flex justify-center items-center h-[4.35rem] w-[4.35rem] rounded-full text-[#ffffff] drop-shadow-[7.770352840423584px 7.770352840423584px 11.655529022216797px rgba(0, 0, 0, 0.15)] backdrop-blur-[7.770352840423584px]'><BiChevronLeft/></button>
                    <button className='flex justify-center items-center h-[4.35rem] w-[4.35rem] rounded-full text-[#ffffff]'><BiChevronRight/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Exhibition