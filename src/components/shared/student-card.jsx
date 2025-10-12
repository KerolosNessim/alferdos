import Image from 'next/image'
import React from 'react'

const StudentCard = ({index,item}) => {
  return (
    <div className='p-2'>
      {/* number */}
      <div className='space-y-2'>
        <h3 className='font-sans text-secondary-green/30 text-6xl font-bold text-start'>
          {String(index).padStart(2, "0")}
        </h3>
        <div className='flex h-80 justify-between '>
          <div className='w-1.5 h-3/4 bg-main-red rounded-full'></div>
          <Image src={item?.image || '/student.jpg'} alt='student' width={1000} height={1000} className='w-[90%] h-full object-cover rounded-md' />
          <div className='w-1.5 h-3/4 bg-main-yellow rounded-full self-end'></div>
        </div>
        <h3 className='text-2xl  text-center'>
          {item?.name ||"مازن سعيد رزق"}
        </h3>
      </div>

    </div>
  )
}

export default StudentCard
