import ResultTable from '@/components/profile/result-table'
import UpdateForm from '@/components/profile/update-form'
import Image from 'next/image'
import React from 'react'

const ResultesPage = () => {
  return (
    <div className='space-y-6'>
      {/* title */}
      <div className='w-fit space-y-2 max-md:mx-auto'>
        <h3 className='text-xl font-bold '>
          <span className='text-main-red w-fit'>بيانات</span>
          <span className='text-[#121212]'> الطالب</span>
        </h3>
        <Image src={'/header-line.svg'} alt='line' width={1000} height={1000} className=' w-20 ' />
      </div>
      {/* information */}
      <div className='py-2 border rounded-xl shadow text-text grid lg:grid-cols-3 max-md:grid-cols-1  lg:divide-x-2  max-lg:divide-y-2 lg:w-fit'>
        {/* name */}
        <div className='p-4'>
          <p className='text-sm'>الاسم</p>
          <p className='font-bold text-secondary-green'>مهدي سعيد العلي رضوان</p>
        </div>
        {/* class */}
        <div className='p-4'>
          <p className='text-sm'>الصف   </p>
          <p className='font-bold text-secondary-green'>الثاني إعدادي</p>
        </div>
        {/*  */}
        <div className='p-4'>
          <p className='text-sm'>رقم الجلوس</p>
          <p className='font-bold text-secondary-green'>2370</p>
        </div>
      </div>
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
