"use client"
import React from 'react'
import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { useUserStore } from '@/stores/userStore'
import Image from 'next/image'

const AuthLinks = () => {
  const { user } = useUserStore()
  return (
    <>
      {user ?
        <Link href={'/profile'} className=" font-bold text-sm hover:text-main-red transition-all duration-300 flex items-center gap-2  p-2 text-white bg-secondary-green/70 rounded-full">
          <Image src={user?.imagen || "/student.jpg"} width={1000} height={1000} alt="logo" className='size-10 rounded-full ' />
          <div >
            <p className='font-bold'>{user?.name}</p>
            <p className='text-xs'>{user?.email}</p>
          </div>

        </Link> :
        <div className='flex items-center gap-4'>
          <Link href={'/signup'} className="text-text font-bold text-sm hover:text-main-red transition-all duration-300">
            تسجيل حساب
          </Link>

          <Link href='/login' className=" border-1 border-green-1 py-2 px-4 rounded text-sm text-green-1 font-bold flex items-center gap-1 w-fit hover:bg-green-1 hover:text-white hover:gap-2 transition-all duration-300">
            <IoIosArrowRoundForward size={20} />
            <span >تسجيل الدخول</span>
          </Link>
        </div>
      }
    </>
  )
}

export default AuthLinks
