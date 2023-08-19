import React from 'react'

import CartItem from '../../Components/cartItem/CartItem';


const Cart = () => {

  return (
    <div className='px-4 lg:px-[6.25rem]'>
      <nav className=' text-base font-medium leading-[3.21rem] text-[#BCB7B7] px-[0.5rem] lg:hidden'>
        <a>Home</a>/
        <a>Marketplace</a>/
        <a className='text-[#292929]'>Cart</a>
        <hr />
      </nav>
      <div>
        <div>
          <div></div>
          <div className='mt-[4.31rem]'>
            <CartItem />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Cart