import React from 'react';
import { PRODUCTS } from '../../Components/productStore/ProductStore';
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


const ProductItems = () => {
   
    const navigate = useNavigate()

    
    return (
        <div className=' '>
            <div className='lg:grid lg:grid-cols-3 lg:gap-[3.31rem]'>
                {PRODUCTS.map(product => {
                    const _id = product.name
                    const idString = (_id) => {
                        return String(_id).toLowerCase().split(" ").join("")
                    }
                    const rootId = idString(_id)
                   
                    const handleDetails = () => {
                        navigate(`/market/${rootId}`, {
                            state: {
                                item: product
                            },
                        })
                    }
                    return (
                        <div key={product.id}>
                            <div className='w-full lg:px-[0.88rem] pt-[1.25rem] mb-[2.81rem] bg-white lg:rounded-[0.9375rem] lg:shadow-[0px_34px_68px_0px_rgba(217,225,244,0.36)]'>
                                <div onClick={handleDetails} className='w-full  h-[24rem] lg:h-[17.5rem] '>
                                    <img src={product.image} alt='product' className='object-cover w-full h-full overflow-hidden lg:rounded-lg' />
                                </div>

                                <div className='flex lg:block justify-between mt-[0.62rem] text-base font-medium leading-6 lg:text-[#333333]'>
                                    <p className='lg:text-[1.375rem]  lg:font-normal lg:leading-8'>{product.name}</p>
                                    <p className='lg:mt-[1.12rem] lg:text-[1.75rem] lg:font-bold lg:leading-8 lg:mb-[0.44rem]'>${product.price}</p>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
            <div className='lg:grid place-items-center'>
                <div className='flex justify-end items-center gap-[0.81rem] mt-6 lg:mt-[7rem]'>
                    <p className='text-lg font-normal leading-[1.97rem] lg:hidden'>Load more</p>
                    <button className='border border-black rounded-full lg:rounded-[0.625rem] h-[3.3125rem] w-[3.3125rem] lg:h-fit lg:w-fit grid place-items-center text-[#333333]'>
                        <BsArrowRight className='lg:hidden'/>
                        <p className='hidden lg:block text-3xl font-medium px-[3.75rem] py-4'>See more</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItems