import React from 'react'

import CartItem from '../../Components/cartItem/CartItem';


const Cart = () => {

  return (
    <div className='px-[6.25rem]'>
      <nav className=' text-base font-medium leading-[3.21rem] text-[#BCB7B7] px-[0.5rem] lg:hidden'>
        <a>Home</a>/
        <a>Marketplace</a>/
        <a>Editorials</a>/
        <a className='text-[#292929]'>Cart</a>
        <hr />
      </nav>
      <div>
        <div>
          <div></div>
          <div>
            <CartItem />
          </div>
        </div>
        <div>
          <div className='w-1/2'>
            <button className='block bg-[#292929] text-white text-[2rem] font-medium py-8 px-[7.31rem]'>Proceed to checkout</button>
            <a className='text-[1.75rem] font-medium text-[#272727] leading-[2.76rem] mt-10 underline'>continue shopping</a>
          </div>
          <div className='w-1/2'>
            <p>Products in cart : <span></span></p>
            <p>Shipping : <span>$2.50</span></p>
            <p>Total : <span></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart