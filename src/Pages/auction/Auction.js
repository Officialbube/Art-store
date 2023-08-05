import React from 'react'
import ActiveAuctions from '../../Components/activeAuction/ActiveAuctions'

const Auction = () => {
  return (
    <div className=' w-full px-2 lg:px-[7.5rem] overflow-x-hidden  lg:mt-8'>
      <nav className='hidden lg:block text-lg font-medium lg:leading-[3.21rem] text-[#BCB7B7]'>
      
        <a>Home</a>/
        <a className='text-[#292929]'>Auctions</a>
      </nav>
      <div>
        <ActiveAuctions/>
      </div>
    </div>
  )
}

export default Auction