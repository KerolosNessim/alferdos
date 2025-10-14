import StudentChart from '@/components/profile/student-chart'
import Image from 'next/image'
import React from 'react'

const StatisticPage = () => {
  return (
    <div className='space-y-6'>
      {/* statistics */}
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
        {/* attendance */}
        <div className='p-6 border rounded-l-2xl flex items-center gap-2'>
          <Image src={'/statis-1.svg'} alt='statis-1' width={100} height={100} className="size-10"/>
          <div className='text-text-gray text-xs space-y-4'>
            <h3>معدل الحضور</h3>
            <p className=' text-xs'><span className=' text-xl font-bold text-black'>90% </span>(42 حصه )</p>
          </div>
        </div>
        {/* alerms */}
        <div className='p-6 border rounded-l-2xl flex items-center gap-2'>
          <Image src={'/statis-2.svg'} alt='statis-1' width={100} height={100} className="size-10"/>
          <div className='text-text-gray text-xs space-y-4'>
            <h3>عدد الإستدعائات</h3>
            <p className=' text-xs'><span className=' text-xl font-bold text-black'>2 </span></p>
          </div>
        </div>
        {/* exams */}
        <div className='p-6 border rounded-l-2xl flex items-center gap-2'>
          <Image src={'/statis-3.svg'} alt='statis-1' width={100} height={100} className="size-10"/>
          <div className='text-text-gray text-xs space-y-4'>
            <h3>إختبارات مكتملة</h3>
            <p className=' text-xs'><span className=' text-xl font-bold text-black'>9 </span></p>
          </div>
        </div>
        {/* abbsent */}
        <div className='p-6 border rounded-l-2xl flex items-center gap-2'>
          <Image src={'/statis-4.svg'} alt='statis-1' width={100} height={100} className="size-10"/>
          <div className='text-text-gray text-xs space-y-4'>
            <h3>عدد الغيابات</h3>
            <p className=' text-xs'><span className=' text-xl font-bold text-black'>7 </span></p>
          </div>
        </div>
        
      </div>
      <div className='bg-white p-12 rounded-xl  shadow-lg'><StudentChart /></div>

    </div>
  )
}

export default StatisticPage
