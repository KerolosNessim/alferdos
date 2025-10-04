import Image from 'next/image'
import React from 'react'

const AchevmentsCard = ({color}) => {
  return (
    <div className='space-y-2'>
      {/* image */}
      <div className='w-full h-80 rounded-tl-[60px] overflow-hidden relative'>
        <div className='w-36 h-28 bg-white rounded-[70px] absolute top-0 left-1/2 -translate-1/2'>
        </div>
        <Image src={'/achevment.jpg'} alt='achevments' width={1000} height={1000} className='w-full h-full object-cover ' />
      </div>
      {/* line */}
      <div className='h-[5px] ' style={{background: color}}></div>
      {/* content */}
      <div className='pb-12 pt-4 px-6 border rounded-br-[60px] space-y-8'>
        <h3 className='text-text text-lg font-bold'>تطوير مواهب الرسم</h3>
        <p className='text-xs text-text-gray leading-6'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص</p>
      </div>
      
    </div>
  )
}

export default AchevmentsCard
