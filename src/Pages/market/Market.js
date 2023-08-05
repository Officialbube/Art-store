import React from 'react'
import Filter from '../../Components/filter/Filter'
import ProductItems from '../../Components/productItems/ProductItems'

const Market = () => {
  return (
    <div className='lg:flex  gap-[4.5rem] w-full px-2 lg:px-[7.5rem] overflow-x-hidden lg:mt-8'>
      <nav className='lg:hidden text-lg font-medium leading-[3.21rem] text-[#BCB7B7]'>
        <a>Home</a>/
        <a>Marketplace</a>/
        <a className='text-[#292929]'>Editorials</a>
      </nav>
      <p className='lg:hidden text-base mt-[1.12rem] text-[#BCB7B7]'>showing 1-5 of 18 results</p>
      <div className='w-[23%] hidden lg:block'>
        <Filter />
      </div>
      <div>
        <div className=' flex items-center justify-between px-4 h-[3.75rem] lg:h-[5.68rem] rounded-[0.9375rem] bg-white shadow-[4px_4px_64px_0px_rgba(0,0,0,0.10)] mb-[5.25rem] mt-[0.94rem]'>
          <p className='hidden lg:block text-2xl text-[#333333]'>See 1-6 of 15 results</p>

          <select name="filters" className='text-lg font-normal lg:hidden'>
            <option value="1">Filters</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <select name="sort_by" className='text-lg font-normal lg:border border-[#333333] rounded-lg lg:py-2 lg:px-8'>
            <option value="1">Sort by</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div className='px-[1.75rem] lg:px-0'>
          <ProductItems />
        </div>

      </div>

    </div>

  )
}

export default Market