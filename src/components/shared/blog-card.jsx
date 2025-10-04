import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const BlogCard = () => {
  return (
    <div className='rounded-e-[60px] overflow-hidden border'>
      {/*image*/}
      <div className='h-60 '>
        <Image src={'/blog.jpg'} alt='blog' width={500} height={500} className='w-full h-full object-cover' />
      </div>
      {/* content */}
      <div className='space-y-8 p-4'>
        <h3 className='text-text text-sm  font-bold'>عنوان المقالة هنا</h3>
        <p className='text-[10px] text-text-gray leading-6 line-clamp-2'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص</p>
        {/* link */}
        <Link href={'/'} className=" border-1 border-main-red p-2 rounded text-xs text-green-1 font-bold flex items-center gap-1 w-fit hover:bg-main-red hover:text-white hover:gap-2 transition-all duration-300">
          <IoIosArrowForward className='text-main-yellow' size={18} />
          <span >قراءة المزيد</span>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
