import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { GiSettingsKnobs } from 'react-icons/gi'

function Filter() {
  return (
    <div>
      <div className='bg-[#F4F2F2] grid place-items-center w-[13rem] h-[3.75rem] px-2 rounded-[0.9375rem] mt-7'>
        <div className='flex gap-[0.88rem] items-center text-[#333333] bg-[#F4F2F2] '>
          <BsSearch className='' />
          <input type='search' placeholder='Search' className='w-[10rem] bg-[#F4F2F2] px-2 border-0' />
        </div>


      </div>
      <div>
        <div className='flex items-center gap-4 text-[2rem] font-normal leading-[3rem] text-[#333333] border-b-[0.375rem] border-[#AFB091] mt-24 '>
          <GiSettingsKnobs />
          <p>Filter</p>
        </div>
        <div className='mt-[3.81rem]'>
          <div>
            <h3 className='text-[1.75rem] font-medium leading-[2.758rem]'>By category</h3>
          </div>
          <div className='mt-[3.12rem]'>
            <div className='flex items-center gap-[0.94rem]'>
              <input type='checkbox' />
              <label className='text-2xl font-normal text-[#292929]'>Editorials</label>
            </div>
            <div className='flex items-center gap-[0.94rem]'>
              <input type='checkbox' />
              <label className='text-2xl font-normal text-[#292929]'>Fashion</label>
            </div>
            <div className='flex items-center gap-[0.94rem]'>
              <input type='checkbox' />
              <label className='text-2xl font-normal text-[#292929]'>Optics</label>
            </div>
            <div className='flex items-center gap-[0.94rem]'>
              <input type='checkbox' />
              <label className='text-2xl font-normal text-[#292929]'>Art & Museum</label>
            </div>
            <div className='flex items-center gap-[0.94rem]'>
              <input type='checkbox' />
              <label className='text-2xl font-normal text-[#292929]'>Nature</label>
            </div>


          </div>
        </div>
        <div className='mt-[3.81rem]'>
          <div>
            <h3 className='text-[1.75rem] font-medium leading-[2.758rem]'>By price</h3>
          </div>
          <div className='mt-[3.12rem]'>
            <p className='text-2xl font-normal text-[#292929]'>$100.00 - $150.00</p>
            <input type='range' className='bg-white mt-[3.12rem] w-full'/>
          </div>
        </div>
        <div className='mt-[3.81rem]'>
          <div>
            <h3 className='text-[1.75rem] font-medium leading-[2.758rem]'>By artist</h3>
          </div>
          <div className='mt-[3.12rem] text-2xl font-normal text-[#292929]'>
            <p >All</p>
            <p>Below $100.00</p>
            <p>$100.00 - $150.00</p>
            <p>$150.00 - $200.00</p>
            <p>Above $200.00</p>
          </div>
        </div>
        <div className='mt-[3.81rem]'>
          <div>
            <h3 className='text-[1.75rem] font-medium leading-[2.758rem]'>Collection year</h3>
          </div>
          <div></div>
        </div>

      </div>
    </div>
  )
}

export default Filter