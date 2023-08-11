import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useSelector} from 'react-redux'


const Header = () => {
  const productData = useSelector((state) => state.cart.productData);
  console.log(productData);
  const navRef = useRef()
  const showNavBar = () => {
    navRef.current.classList.toggle('hidden')
    navRef.current.classList.toggle('h-screen')
    navRef.current.classList.toggle('w-screen')
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
        <nav ref={navRef} className='hidden sm:flex flex flex-col lg:flex-row  lg:gap-x-12 gap-[1.12rem] px-[1.88rem] pt-6 overflow-hidden text-2xl font-medium absolute lg:relative top-0 left-0 z-[400]  bg-white'>
          <div className='lg:hidden flex justify-between items-center  mb-[3.12rem]'>
            <p className='text-2xl font-bold leading-[3.21rem] text-[#292929]'>Artsy.</p>
            <button onClick={showNavBar} className='lg:hidden flex flex-col'>
              <span className='bg-[#333333] w-[1.62rem] h-px block rotate-45 translate-y-px'></span>
              <span className='bg-[#333333] w-[1.62rem] h-px block -rotate-45'></span>
            </button>
          </div>
          <Link to="/" className=' z-[300] text-2xl font-medium leading-[3.21rem] text-[#333333]'>Home</Link>
          <Link to="/market" className='text-2xl font-medium leading-[3.21rem] text-[#333333]'>Marketplace</Link>
          <Link to="/auction" className='text-2xl font-medium leading-[3.21rem] text-[#333333]'>Auctions</Link>
          <Link to="/drop" className='text-2xl font-medium leading-[3.21rem] text-[#333333]'>Drop</Link>

          <div className='lg:hidden flex justify-end absolute bottom-16 right-8'>
            <a className='lg:hidden w-16 h-16 rounded-full bg-[#3341c1] text-white grid place-items-center '>
              <ChatBubbleIcon />
            </a>
          </div>

        </nav>
        <nav className='flex items-center gap-x-4'>
          <a>
            <SearchIcon />
          </a>
          <Link to="/cart" className='relative' >
            <ShoppingCartOutlinedIcon />
            <span className='text-[red] absolute font-lg text-lg top-[-0.8rem] right-[-0.5rem]'>{productData.length}</span>
          </Link>
          <a className='hidden lg:block'>
            <NotificationsNoneOutlinedIcon />
          </a>



        </nav>
      </nav>
    </div>
  )
}

export default Header