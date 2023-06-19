import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


const Header = () => {
  return (
    <div>
      <nav className='flex justify-between items-center w-full px-44 h-24'>
      <p className='text-4xl font-bold'>ARTSY.</p>
      <nav className='flex items-center gap-x-12 text-2xl font-medium'>
        <Link to="/">Home</Link>
        <Link to="/market">Marketplace</Link>
        <Link to="/auction">Auctions</Link>
        <Link to="/drop">Drop</Link>

      </nav>
      <nav className='flex items-center gap-x-8'>
        <SearchIcon />
        <ShoppingCartOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
      </nav>
    </nav>
    </div>
  )
}

export default Header