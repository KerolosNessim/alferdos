import Image from 'next/image';
import React from 'react'

const SectionHeader = ({ title }) => {
  const [first, ...rest] = title.split(" ");
  return (
    <div className='w-fit space-y-4 max-md:mx-auto'>
      <h3 className='lg:text-5xl md:text-4xl text-3xl font-bold '>
        <span className='text-main-red w-fit'>{first}</span>
        <span className='text-[#121212]'>{rest.join(" ")}</span>
      </h3>
      <Image src={'/header-line.svg'} alt='line' width={1000} height={1000} className='lg:w-30 md:w-26 w-20 ' />
    </div>
  )
}

export default SectionHeader
