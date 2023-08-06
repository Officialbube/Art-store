import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


const Header = () => {
  const navRef = useRef()
  const showNavBar = () => {
    navRef.current.classList.toggle('hidden')
  }
  return (
    <div className='relative bg-white z-[50] top-0'>
      <nav className='flex justify-between items-center w-screen overflow-hidden px-4 lg:px-28 h-24'>
        <button onClick={showNavBar} className='flex flex-col gap-2 lg:hidden'>
          <span className='bg-black w-6 h-px block'></span>
          <span className='bg-black w-6 h-px block'></span>
          <span className='bg-black w-6 h-px block'></span>
        </button>
        <Link to="/" className='text-2xl lg:text-4xl font-bold'>ARTSY.</Link>
        <nav ref={navRef} className=' hidden flex flex-col items-center gap-x-12 gap-12 text-2xl font-medium absolute top-0 z-[200] sm:hidden h-screen w-screen  bg-white'>
          <Link to="/" className=' z-[300] text-black'>Home</Link>
          <Link to="/market">Marketplace</Link>
          <Link to="/auction">Auctions</Link>
          <Link to="/drop">Drop</Link>
          <button onClick={showNavBar}>
            <span className='bg-black w-6 h-px block'></span>
            <span className='bg-black w-6 h-px block'></span>
          </button>
        </nav>
        <nav className='flex items-center gap-x-4'>
          <a>
            <SearchIcon />
          </a>
          <a className='' >
            <ShoppingCartOutlinedIcon />
          </a>
          <a className='hidden lg:block'>
            <NotificationsNoneOutlinedIcon  />
          </a>



        </nav>
      </nav>
    </div>
  )
}

export default Header