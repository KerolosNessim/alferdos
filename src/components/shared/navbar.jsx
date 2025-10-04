import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import * as motion from 'motion/react-client'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";

const Navavbar = () => {
  return (
    <div className='bg-bg-green'>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='container py-6 flex items-center justify-between'>
        {/* logo */}
        <Link href={'/'}>
          <Image src="/logo.png" width={1000} height={1000} alt="logo" className='w-20' />
        </Link>

        {/* links */}
        <nav className='max-md:hidden'>
          <ul className='text-text-gray  flex items-start gap-6 '>
            <li><Link href={'/'} className='text-text text-sm font-bold'>الرئيسية</Link>
            <Image src="/nav.svg" width={1000} height={1000} alt="logo" className='w-8 mt-2' />
            </li>
            <li><Link href={'/'} className=' text-sm '>أوائل الطلبة</Link></li>
            <li><Link href={'/'} className=' text-sm '>إنجازاتنا</Link></li>
            <li><Link href={'/'} className=' text-sm '>الفعاليات</Link></li>
            <li><Link href={'/'} className=' text-sm '>المدونة</Link></li>
          </ul>
        </nav>
        {/* buttons */}
        <div className='max-md:hidden flex items-center gap-4'>
          <Link href={'/'} className="text-text font-bold text-sm hover:text-main-red transition-all duration-300">
          تسجيل الدخول
          </Link>

          <a href='#' className=" border-1 border-green-1 py-2 px-4 rounded text-sm text-green-1 font-bold flex items-center gap-1 w-fit hover:bg-green-1 hover:text-white hover:gap-2 transition-all duration-300">
            <IoIosArrowRoundForward size={20} />
            <span >إنضم الينا</span>
          </a>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden border-1 border-green-1 py-2 px-4 rounded text-sm text-green-1 font-bold flex items-center gap-1 w-fit hover:bg-green-1 hover:text-white hover:gap-2 transition-all duration-300">
            <GiHamburgerMenu size={20} />
          </SheetTrigger>
          <SheetContent className={'bg-bg-green'}>
            <SheetHeader>
              <SheetTitle>
                <Image src="/footer-logo.png" width={1000} height={1000} alt="logo" className='w-1/2 mx-auto my-12' />
              </SheetTitle>
              <SheetDescription className={"space-y-12"}>
                {/* links */}
                <nav>
                  <ul className='text-text-gray  flex flex-col items-center gap-6 '>
                    <li><Link href={'/'} className='text-text text-sm font-bold'>الرئيسية</Link>
                      <Image src="/nav.svg" width={1000} height={1000} alt="logo" className='w-8 mt-2' />
                    </li>
                    <li><Link href={'/'} className=' text-sm '>أوائل الطلبة</Link></li>
                    <li><Link href={'/'} className=' text-sm '>إنجازاتنا</Link></li>
                    <li><Link href={'/'} className=' text-sm '>الفعاليات</Link></li>
                    <li><Link href={'/'} className=' text-sm '>المدونة</Link></li>
                  </ul>
                </nav>
                {/* buttons */}
                <div className='flex items-center justify-center gap-4'>
                  <Link href={'/'} className="text-text font-bold text-sm hover:text-main-red transition-all duration-300">
                    تسجيل الدخول
                  </Link>

                  <a href='#' className=" border-1 border-green-1 py-2 px-4 rounded text-sm text-green-1 font-bold flex items-center gap-1 w-fit hover:bg-green-1 hover:text-white hover:gap-2 transition-all duration-300">
                    <IoIosArrowRoundForward size={20} />
                    <span >إنضم الينا</span>
                  </a>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </motion.div>

    </div>
  )
}

export default Navavbar
