'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
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
import AuthLinks from './auth-links'

const Navavbar = ({ withbreadcrumb = false }) => {
  const pathname = usePathname()

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'أوائل الطلبة', href: '/students' },
    { name: 'إنجازاتنا', href: '/achevments' },
    { name: 'الفعاليات', href: '/events' },
    { name: 'المدونة', href: '/blogs' },
  ]

  return (
    <div className={`bg-bg-green ${withbreadcrumb && 'pb-20'}`}>
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
          <ul className='flex items-start gap-6'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href} className='relative'>
                  <Link
                    href={link.href}
                    className={`text-sm ${isActive ? 'text-text font-bold' : 'text-text-gray'}`}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <Image src="/nav.svg" width={1000} height={1000} alt="logo" className='w-8 mt-2' />
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
        {/* buttons */}
        <div className='max-md:hidden '>
          <AuthLinks />
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
                  <ul className='flex flex-col items-center gap-6'>
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href
                      return (
                        <li key={link.href} className='relative flex flex-col items-center'>
                          <Link
                            href={link.href}
                            className={`text-sm ${isActive ? 'text-text font-bold' : 'text-text-gray'}`}
                          >
                            {link.name}
                          </Link>
                          {isActive && (
                            <Image src="/nav.svg" width={1000} height={1000} alt="logo" className='w-8 mt-2' />
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </nav>
                {/* buttons */}
                <div className=''>
                  <AuthLinks />
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
