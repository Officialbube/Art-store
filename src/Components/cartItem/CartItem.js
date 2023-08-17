import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../Redux/features/cart/cartSlice'
import {HiXMark} from 'react-icons/hi2'


const CartItem = () => {
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
                            <div className='flex gap-4  text-3xl font-medium leading-[1.83rem] text-[#333333] border rounded-[0.62rem] w-fit'>
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
        </div>
    )
}

export default CartItem