import React from 'react'
import Exhibition from '../../Components/exhibition/Exhibition'

import FeaturedProducts from '../../Components/featuredProducts/featuredProducts'

import CardShow from '../../Components/slider/cardShow'
import Slider from '../../Components/slider/Slider'



const Home = () => {
  return (
    <section className='w-screen overflow-hidden'>
      <h1 className='text-3xl lg:text-6xl  font-medium text-center mx-8 lg:px-28 lg:leading-[6rem]'>
        Photography is poetry & beautiful untold stories
      </h1>
      <p className='text-center mx-6 text-base font-medium leading-6 mt-12 lg:px-64 lg:text-2xl lg:leading-10'>
        Flip through more than 10,000 vintage shots,
        old photograghs, historic images and captures seamlessly in one place.
        Register to get top access.
      </p>
      <div className='hidden sm:block'>
        <Slider />
      </div>
      <div className='h-80 w-96 mx-2.5 relative mt-7 sm:hidden'>
        <CardShow />
      </div>
      <FeaturedProducts />
      <Exhibition />



    </section>
  )
}

export default Home 