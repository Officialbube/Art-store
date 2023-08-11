import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addToCart } from '../../Redux/features/cart/cartSlice'


const Product = ({name, id, price, image }) => {
    const [details, setDetails] = useState({})
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        setDetails(location.state.item)
    }, [])
    const [baseQty,setBaseQty] = useState(1)
    return (
        <div>
            <nav className=' text-base font-medium leading-[3.21rem] text-[#BCB7B7] px-[0.5rem]'>
                <a>Home</a>/
                <a>Marketplace</a>/
                <a>Editorials</a>/
                <a className='text-[#292929]'>{details.name}</a>
                <hr/>
            </nav>
            <div className='mt-[1.88rem] lg:flex'>
                <div>
                    <div className='h-[24rem] px-[1.75rem]'>
                        <img src={details.image} className='object-cover h-full w-full' />
                    </div>
                </div>
                <div>
                    <div className='px-[1.75rem] text-base'>
                        <div className='flex justify-between mt-[1.06rem] text-base font-medium'>
                            <p>{details.name}</p>
                            <p>{details.price}</p>
                        </div>
                        <p className='mt-[1.88rem]'>Creator : <span className='text-[#006ca2]'>Ali Dawa</span></p>
                        <p className='mt-[1.25rem]'>Made in Italy</p>
                        <p className='mt-[1.25rem]'>Total views : 1.7K</p>
                        <div className='flex gap-4 mt-[1.56rem] text-3xl font-medium leading-[1.83rem] text-[#333333]'>
                            <button onClick={() => 
                               setBaseQty(baseQty === 1? baseQty = 1 : baseQty - 1)
                               
                            }>-</button>
                            {baseQty}
                            <button onClick={() => 
                               setBaseQty(baseQty + 1)
                            }>+</button>
                        </div>
                        <div className='mt-[1.56rem] flex gap-[1.24rem]'>
                            <button onClick={() => dispatch(addToCart({
                                id: details.id,
                                name: details.name,
                                image: details.image,
                                price: details.price,
                                quantity: baseQty,
                                
                            }))} className='bg-[#272727] text-white px-[3.94rem] py-[1.078rem]'>Add to cart</button>
                            <button></button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Description</p>
                        </div>
                        <div>
                            <p>Listing</p>
                        </div>
                        <div>
                            <p>Status</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>More from this collection</h2>
                <div>
                    <div></div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product