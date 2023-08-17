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
        <div className='flex flex-col-reverse'>
          <div className=' w-full lg:w-1/2 flex flex-col items-center py-[2.69rem]'>
            <button className='block bg-[#292929] text-white text-[1.09rem] lg:text-[2rem] font-medium py-[1.09rem] px-16 lg:py-8 lg:px-[7.31rem] w-fit'>Proceed to checkout</button>
            <a className='text-lg lg:text-[1.75rem] font-medium text-[#272727] leading-[2.76rem] mt-[1.88rem] lg:mt-10 underline'>continue shopping</a>
          </div>
          <div className='w-full'>
            <div className='flex flex-col gap-[1.31rem] text-xl text-[#888] font-normal py-[1.88rem] border-b-2 border-dashed'>
              <div className='flex justify-between'>
              <p>Products in cart : </p>
              <span className='font-medium text-[#292929]'>6</span>
              </div>
              <div className='flex justify-between'>
              <p>Shipping : </p>
              <span className='font-medium text-[#292929]'>$2.50</span>
              </div>
              <div className='flex justify-between'>
              <p>Total :</p>
              <span className='font-medium text-[#292929]'>$117</span>
              </div>
            
            
            
            </div>
            <div>
            <div className='flex justify-between pt-[1.06rem]'>
              <p>Grand total :</p>
              <span className='font-medium text-[#292929]'>$119.50</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart