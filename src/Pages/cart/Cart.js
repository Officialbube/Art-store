import React from 'react'

import CartItem from '../../Components/cartItem/CartItem';

const Cart = () => {
  
  return (
    <div>
      <nav className=' text-base font-medium leading-[3.21rem] text-[#BCB7B7] px-[0.5rem]'>
        <a>Home</a>/
        <a>Marketplace</a>/
        <a>Editorials</a>/
        <a className='text-[#292929]'>Cart</a>
        <hr />
      </nav>
      <div>
        <div>
          <CartItem/>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Cart