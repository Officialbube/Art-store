import React from 'react'
import { featuredProducts } from './featuredProductData'
import { BsArrowRight } from 'react-icons/bs'
import { creators } from '../../assets/image'


const FeaturedProducts = () => {

  return (
    <div className='mt-28 mb-8'>
      <h2 className='text-3l font-bold px-3'>Featured Products</h2>
      <div className=''>
        {featuredProducts.map(slide => {
          return (
            <div key={slide.id} className='px-3 mb-8'>
              <div className='relative h-60'>
                <img src={slide.image} className='w-full absolute brightness-50 mb-4' />
                <p className='text-3xl text-semibold absolute z-10 text-zinc-50 inset-x-0 m-auto top-12'>{slide.title}</p>
                <button className='absolute right-8 bottom-16 z-10 bg-transparent border-2 border-inherit h-14 w-14 text-3xl text-zinc-50 rounded-full flex justify-center items-center'>
                  <BsArrowRight />
                </button>
              </div>
              <div>
                <p className='text-base font-normal leading-6'>{slide.desc}</p>
              </div>
              <div className='flex items-center gap-4 my-4'>
                <div className='flex '>
                  {creators.map(creator => {
                    return (
                      <div className='h-10 w-10 rounded-full '>
                        <img src={creator} className='rounded-full' />
                      </div>
                    )
                  })}
                </div>
                <p className='text-base font-medium'>64 major creators</p>
              </div>
              <hr/>




            </div>

          )
        })}
      </div>
    </div>
  )

}

export default FeaturedProducts;