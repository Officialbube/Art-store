import React from 'react'
import { featuredProducts } from './featuredProductData'
import { BsArrowRight } from 'react-icons/bs'
import { creators } from '../../assets/image'


const FeaturedProducts = () => {

  return (
    <div className='mt-28 mb-8 lg:px-28'>
      <h2 className='text-3l font-bold px-3 lg:text-5xl lg:font-medium lg:mb-[2.3rem]'>Featured Products</h2>
      <div className=''>
        {featuredProducts.map(slide => {
          return (
            <div key={slide.id} className='mx-3  relative lg:flex lg:even:flex-row-reverse lg:items-center lg:gap-[2.3rem] lg:py-[3.8rem] border-t-[0.03rem] border-[#333333]'>
              <div className='relative h-60 w-30 lg:h-full lg:h-[19rem] lg:w-full'>
                <img src={slide.image} className='w-full absolute lg:relative brightness-50 mb-4 lg:mb-0 h-full lg:object-cover' />

              </div>

              <div className=' items-center gap-4 my-4 lg:my-0'>
                <p className='text-3xl lg:text-4xl text-semibold absolute lg:relative z-10 text-zinc-50 lg:text-[black] inset-x-0 m-auto lg:mb-[2.62rem] top-12 lg:top-0'>
                  {slide.title}
                </p>
                <div className='lg:mb-[2.38rem]'>
                  <p className='text-base font-normal leading-6'>{slide.desc}</p>
                </div>
               
                <div className='flex items-center lg:gap-[0.9rem]'>
                  <div className='flex '>
                    {creators.map(creator => {
                      return (
                        <div className='h-10 w-10 lg:h-[3.187rem] lg:w-[3.187rem] rounded-full '>
                          <img src={creator} className='rounded-full' />
                        </div>
                      )
                    })}
                  </div>
                  <p className='text-base font-medium lg:text-xl lg:font-normal'>64 major creators</p>
                  <button className='absolute lg:relative right-8 lg:left-0 lg:top-0 top-[7rem] z-10 bg-transparent border-2 border-inherit h-14 w-14 lg:h-16 lg:w-16 text-3xl text-zinc-50 lg:text-[#616161] lg:border-[#333333] lg:self-end rounded-full flex justify-center items-center'>
                  <BsArrowRight />
                </button>
                </div>

              </div>
              <hr />




            </div>

          )
        })}
      </div>
    </div>
  )

}

export default FeaturedProducts;