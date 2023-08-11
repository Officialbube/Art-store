import React from 'react'
import { useSelector } from 'react-redux'

const CartItem = () => {
    const productData = useSelector((state) => state.cart.productData);
    console.log(productData)
    return (
        <div>
            {productData.map((item) => (
                <div key={item.id} className='flex mb-[3.12rem]'>
                    <div className='flex gap-[1.31rem]'>

                        <div className='h-[7.87rem] w-[7.81rem] overflow-hidden'>
                            <img src={item.image} className='h-full w-full object-cover' />
                        </div>
                        <div>
                            <p></p>
                            <p>{item.name}</p>
                            <div className='flex gap-4 mt-[1.56rem] text-3xl font-medium leading-[1.83rem] text-[#333333]'>
                                <button>-</button>
                                1
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div>


                        <div></div>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default CartItem