import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../Redux/features/cart/cartSlice'
import { HiXMark } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const CartItem = () => {
    const shippingFee = 2.50
    const productData = useSelector((state) => state.cart.productData);
    const dispatch = useDispatch()
    return (
        <div >
            {productData.map((item) => (
                <div key={item.id} className='flex justify-between pb-[3.12rem] lg:pb-[0] lg:py-[4rem] lg:border-y-[0.018rem] border-[#747474] '>
                    <div className='flex gap-[1.31rem]'>

                        <div className='h-[7.87rem] w-[7.81rem] lg:h-[12.2rem] lg:w-[13.1rem] overflow-hidden'>
                            <img src={item.image} className='h-full w-full object-cover' />
                        </div>
                        <div className='flex flex-col justify-between '>
                            <p className='text-base text-[#616161]'>category</p>
                            <p className='text-[1.375rem] lg:text-[1.62rem] font-bold lg:font-medium text-[#292929] '>{item.name}</p>
                            <p className='hidden lg:block text-2xl font-normal text-[#888]'>jhfdhg</p>
                            <p className='hidden lg:block text-xl font-normal text-[#888]'>jhfdhg</p>
                            <div className='flex  text-3xl font-medium leading-[1.83rem] text-[#333333] border rounded-[0.62rem] w-fit'>
                                <button className='grid place-items-center h-full w-full'>-</button>
                                <p className='border-x-2 px-4'>1</p>
                                <button className='grid place-items-center'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>



                        <button onClick={() => dispatch(removeFromCart(item.id))} className='border rounded-full h-10 w-10 grid place-items-center text-3xl text-[#888888]'>
                            <HiXMark />
                        </button>
                        <p className='text-lg lg:text-4xl font-normal text-[#292929]'>${item.price}</p>

                    </div>
                </div>
            )
            )}
            {productData.length === 0 ?
                <div className='grid place-items-center h-1/2 pt-20'>
                    <p className='text-[#006ca2] text-base text-center lg:text-4xl'>Cart is empty. Please add products from the 
                        <Link to='/market' className='ml-2 underline'>
                             marketplace
                        </Link></p>
                </div> :
                <div className='flex flex-col-reverse'>
                    <div className=' w-full lg:w-1/2 flex flex-col items-center py-[2.69rem]'>
                        <button className='block bg-[#292929] text-white text-[1.09rem] lg:text-[2rem] font-medium py-[1.09rem] px-16 lg:py-8 lg:px-[7.31rem] w-fit'>Proceed to checkout</button>
                        <a className='text-lg lg:text-[1.75rem] font-medium text-[#272727] leading-[2.76rem] mt-[1.88rem] lg:mt-10 underline'>continue shopping</a>
                    </div>
                    <div className='w-full'>
                        <div className='flex flex-col gap-[1.31rem] text-xl text-[#888] font-normal py-[1.88rem] border-b-2 border-dashed'>
                            <div className='flex justify-between'>
                                <p>Products in cart : </p>
                                <span className='font-medium text-[#292929]'>{productData.length}</span>
                            </div>
                            <div className='flex justify-between'>
                                <p>Shipping : </p>
                                <span className='font-medium text-[#292929]'>${shippingFee}</span>
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
            }
        </div>
    )
}

export default CartItem