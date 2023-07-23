import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


const Header = () => {
  return (
    <div>
      <nav className='flex justify-between items-center w-screen px-4 h-24'>
        <div className='flex flex-col gap-2 lg:hidden'>
          <span className='bg-black w-6 h-px block'></span>
          <span className='bg-black w-6 h-px block'></span>
          <span className='bg-black w-6 h-px block'></span>
        </div>
        <p className='text-2xl font-bold'>ARTSY.</p>
        <nav className='md:flex items-center gap-x-12 text-2xl font-medium hidden sm:hidden '>
          <Link to="/">Home</Link>
          <Link to="/market">Marketplace</Link>
          <Link to="/auction">Auctions</Link>
          <Link to="/drop">Drop</Link>

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