import Image from 'next/image'
import React from 'react'
import NewsLetter from './newsletter-form'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import * as motion from 'motion/react-client'
const Footer = () => {
  return (
    <footer>
      {/* banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='relative z-10'
      >
      <Link href={'/'} className='container block  translate-y-30 z-10 '>
        <Image src={'/banner.png'} alt='bg' width={1000} height={1000} className='w-full h-full object-cover' />
      </Link>
      </motion.div>
      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='bg-[#F8F9FB] pt-30'>
        {/* content */}
        <div className='py-20 container flex lg:justify-between max-lg:justify-center max-lg:flex-wrap max-lg:gap-12'>
          {/* logo and newsletter */}
          <div className='space-y-6 lg:w-1/4 max-lg:w-full'>
            <Image src={'/footer-logo.png'} alt='logo' width={100} height={100} className='w-60 max-lg:mx-auto' />
            <NewsLetter />
          </div>
          {/* links */}
          <div className='space-y-4'>
            {/* header */}
            <div className='space-y-2'>
              <h3 className='font-bold'>روابط هامة</h3>
              <Image src={'/footer-line.svg'} alt='line' width={1000} height={1000} className='w-12' />
            </div>
            {/* links */}
            <ul className='text-sm space-y-2'>
              <li>
                <Link href={'/'} className='hover:text-main-red'>أوائل الطلبة</Link>
              </li>
              <li>
                <Link href={'/'} className='hover:text-main-red'>الإنجازات</Link>
              </li>
              <li>
                <Link href={'/'} className='hover:text-main-red'>المدونة</Link>
              </li>
              <li>
                <Link href={'/'} className='hover:text-main-red'>الفعاليات</Link>
              </li>
            </ul>
          </div>
          {/* links */}
          <div className='space-y-4'>
            {/* header */}
            <div className='space-y-2'>
              <h3 className='font-bold'>روابط هامة</h3>
              <Image src={'/footer-line.svg'} alt='line' width={1000} height={1000} className='w-12' />
            </div>
            {/* links */}
            <ul className='text-sm space-y-2'>
              <li>
                <Link href={'/'} className='hover:text-main-red'>أوائل الطلبة</Link>
              </li>
              <li>
                <Link href={'/'} className='hover:text-main-red'>النتائج</Link>
              </li>
              <li>
                <Link href={'/'} className='hover:text-main-red'>ملف الطالب</Link>
              </li>
              <li>
                <Link href={'/'} className='hover:text-main-red'>تسجيل حساب</Link>
              </li>
            </ul>
          </div>
          {/* links */}
          <div className='space-y-4'>
            {/* header */}
            <div className='space-y-2'>
              <h3 className='font-bold'>تواصل معنا</h3>
              <Image src={'/footer-line.svg'} alt='line' width={1000} height={1000} className='w-12' />
            </div>
            {/* links */}
            <ul className='text-sm space-y-4'>
              <li>
                <Link href={'/'} className='hover:text-main-red flex items-center gap-2'>
                  <Image src={'/location.svg'} alt='icon' width={100} height={100} className='w-3' />
                  إسم الشارع, المبني, الحي, المدينة
                </Link>
              </li>
              <li>
                <Link href={'/'} className='hover:text-main-red flex items-center gap-2'>
                  <Image src={'/phone.svg'} alt='icon' width={100} height={100} className='w-4' />
                  +977-77418438
                </Link>
              </li>
              <li>
                <Link href={'/'} className='hover:text-main-red flex items-center gap-2'>
                  <Image src={'/email.svg'} alt='icon' width={100} height={100} className='w-4' />
                  name@school.it
                </Link>
              </li>

            </ul>
          </div>
          {/* iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d442766.094041673!2d31.25243955667438!3d29.88992774531585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sroute%20academy!5e0!3m2!1sen!2seg!4v1759569623753!5m2!1sen!2seg"
            style={{ border: 0 }}   // ✅ لازم تبقى object
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"  // ✅ camelCase
            className="lg:w-60 max-lg:w-full  rounded-tl-[40px] " // (اختياري للتنسيق)
          ></iframe>


        </div>
        {/* copyright */}
        <div className='border-t-2 border-main-red/10 text-center py-6 container flex items-center justify-between'>
          {/* social */}
          <div className='flex items-center gap-4'>
            <a href="#" className='text-main-red hover:text-green-1 transition-all duration-300'>
              <FaInstagram size={20} />
            </a>
            <a href="#" className='text-main-red hover:text-green-1 transition-all duration-300'>
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className='text-main-red hover:text-green-1 transition-all duration-300'>
              <FaTwitter size={20} />
            </a>
            <a href="#" className='text-main-red hover:text-green-1 transition-all duration-300'>
              <FaFacebookF size={20} />
            </a>
          </div>
          {/* copyright */}
          <p className='text-sm'> Copyright TSD 2025 <span className='text-main-red text-lg'>&copy;</span></p>
        </div>

      </motion.div>
    </footer>
  )
}

export default Footer
