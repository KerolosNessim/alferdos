import ResultTable from '@/components/profile/result-table'
import UpdateForm from '@/components/profile/update-form'
import Image from 'next/image'
import React from 'react'

const ResultesPage = () => {
  return (
    <div className='space-y-6'>
      {/* result title */}
      <div className='w-fit space-y-2 max-md:mx-auto'>
        <h3 className='text-xl font-bold '>
          <span className='text-main-red w-fit'>نتيجة</span>
          <span className='text-[#121212]'> الطالب</span>
        </h3>
        <Image src={'/header-line.svg'} alt='line' width={1000} height={1000} className=' w-20 ' />
      </div>
      {/* table */}
      <ResultTable/>
    </div>
  )
}

export default ResultesPage
