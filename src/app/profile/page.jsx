import UpdateForm from '@/components/profile/update-form'
import Image from 'next/image'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='space-y-6'>
      <div className='w-fit space-y-2 max-md:mx-auto'>
        <h3 className='text-xl font-bold '>
          <span className='text-main-red w-fit'>البيانات</span>
          <span className='text-[#121212]'> الشخصية</span>
        </h3>
        <Image src={'/header-line.svg'} alt='line' width={1000} height={1000} className=' w-20 ' />
      </div>

      <UpdateForm />

    </div>
  )
}

export default ProfilePage
