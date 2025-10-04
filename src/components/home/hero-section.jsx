"use client"
import Image from 'next/image'
import React from 'react'
import * as motion from 'motion/react-client'
import { Button } from '../ui/button'
const HeroSection = () => {
  return (
    <section className=' bg-bg-green relative z-1 overflow-hidden '>
      <Image src={'/hero-r.svg'} alt='hero' width={1000} height={1000} className='lg:w-60 md:w-48 w-28 object-cover absolute top-0 right-0 -z-1' />
      <Image src={'/hero-l.svg'} alt='hero' width={1000} height={1000} className='lg:w-80 md:w-60 w-48  object-cover absolute bottom-0 left-0 -z-1' />

      <div className='container  pb-20 pt-20 lg:pt-32 flex items-center lg:gap-12   '>
        {/* image */}
        <div className='relative h-full self-end max-lg:hidden'>
          <motion.img
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src={'/hero.png'} alt='hero' width={1000} height={1000} className='z-10 w-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-bottom' />
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: -45 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='  size-80 rounded-full bg-linear-to-b from-[#DF7F30] to-[#EBAC3E] flex justify-center items-center'>
            <div className='size-70 rounded-full bg-[#E48333] relative'>
              <Image src={'/sun.png'} alt='hero' width={1000} height={1000} className='size-50 bg-contain absolute top-6 -right-40' />
            </div>
          </motion.div>
        </div>
        {/* content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='lg:w-1/2  space-y-4'>
          {/* header */}
          <div className='space-y-2'>
            <p className='text-green-1 font-bold lg:text-base text-sm'>أفضل مدرسة لأولادك</p>
            <Image src={'/Line.svg'} alt='logo' width={1000} height={1000} className='lg:w-26 w-20' />
          </div>
          {/* title */}
          <h1 className='lg:text-5xl md:text-4xl text-3xl text-text font-bold lg:leading-20 md:leading-14 leading-12 '>أكثر من +25 ألف طالب,<br className='hidden md:block' /> ولي أمر يثقون بنا</h1>
          {/* description */}
          <div className=''>
            <p className='text-text-gray text-xs lg:w-2/3 leading-6'>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
            </p>
            <Image src={'/arrow.svg'} alt='logo' width={1000} height={1000} className='w-16 lg:ms-[20%] ms-[30%]' />
            <Button className={"bg-secondary-green text-white px-8 h-12"}>المزيد عنا</Button>
          </div>
        </motion.div>
      </div>
      <Image src={'/cloud.svg'} alt='logo' width={1000} height={1000} className='w-[40%] absolute -bottom-14 right-0 z-[11]' />
      <Image src={'/cloud-2.svg'} alt='logo' width={1000} height={1000} className='w-[20%] absolute -bottom-28 right-1/3 z-[11]' />
    </section>
  )
}

export default HeroSection
