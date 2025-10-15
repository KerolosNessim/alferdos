import MonthlyExamTable from '@/components/profile/month-table'
import Image from 'next/image'
import React from 'react'

const MonthlyExamsPage = () => {
  return (
    <div className='space-y-6'>
      {/* title */}
      <div className='w-fit space-y-2 max-md:mx-auto'>
        <h3 className='text-xl font-bold '>
          <span className='text-main-red w-fit'>التقييمات</span>
          <span className='text-[#460808]'> الشهرية</span>
        </h3>
        <Image src={'/header-line.svg'} alt='line' width={1000} height={1000} className=' w-20 ' />
      </div>
      <MonthlyExamTable />
    </div>
  )
}

export default MonthlyExamsPage
