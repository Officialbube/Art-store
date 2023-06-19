import React from 'react'
import { image1, image2, image3 } from '../../assets/image'


const Home = () => {
  return (
    <section>
      <h1 className='text-6xl font-medium text-center mx-36'>
      Photography is poetry & beautiful untold stories
      </h1>
      <p className='text-center mx-64 text-2xl font-medium leading-10 mt-12'>
      Flip through more than 10,000 vintage shots,
      old photograghs, historic images and captures seamlessly in one place.
      Register to get top access.
      </p>
      
      <section className='px-28 pt-40'>
      <h2 className='text-5xl font-medium'>Featured products</h2>
      <div>
        <div className='flex justify-between mt-9 border-t-2 py-14'>
          <div>
            <img src={image3}/>
          </div>
          <div className='flex flex-col justify-between w-96'>
            <h3 className='text-4xl font-medium'>The Boolean Egyptian</h3>
            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit ut aliquam, 
              purus sit amet luctus venenatis, 
              lectus magna fringilla urna, 
              porttitor rhoncus dolor pur</p>
            <div>
              <div>
                <p>64 major creators</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='flex flex-row-reverse justify-between border-t-2 py-14'>
          <div>
          <img src={image2}/>
          </div>
          <div className='flex flex-col justify-between w-96'>
          <h3 className='text-4xl font-medium'>The Boolean Egyptian</h3>
            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit ut aliquam, 
              purus sit amet luctus venenatis, 
              lectus magna fringilla urna, 
              porttitor rhoncus dolor pur</p>
            <div>
              <div>
              <p>64 major creators</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='flex  justify-between border-t-2 py-14'>
          <div>
          <img src={image1} className=''/>
          </div>
          <div className='flex flex-col justify-between w-96'>
          <h3 className='text-4xl font-medium'>The Boolean Egyptian</h3>
            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit ut aliquam, 
              purus sit amet luctus venenatis, 
              lectus magna fringilla urna, 
              porttitor rhoncus dolor pur</p>
            <div>
              <div>
              <p>64 major creators</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      </section>
      <section>
        <div className='h-96'></div>
      </section>
    </section>
  )
}

export default Home 