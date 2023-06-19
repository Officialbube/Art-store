import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <section>
      <nav className='flex justify-between px-40'>
        <p className='text-5xl font-semibold'>ARTSY.</p>
        <div className='flex text-2xl font-normal'>
          <nav className='flex flex-col gap-y-8 '>
            <Link to="/">Home</Link>
            <Link to="/market">Marketplace</Link>
            <Link to="/auction">Auctions</Link>
            <Link to="/drop">Drop</Link>
          </nav>
          <nav className='flex flex-col gap-y-8'>
            <Link to="/">Home</Link>
            <Link to="/market">Marketplace</Link>
            <Link to="/auction">Auctions</Link>
            <Link to="/drop">Drop</Link>
          </nav>
        </div>
        <nav className='flex flex-col text-2xl font-normal gap-y-16'>
          <Link to="/market">artsystudios@gmail.com</Link>
          <Link to="/auction">Lagos, Nigeria.</Link>
        </nav>
      </nav>
      <div className='w-full py-11'>
        <p className='text-center opacity-50 text-2xl font-medium'>Artsystudios © 2022. All Rights Reserved.</p>
      </div>
    </section>
  )
}

export default Footer