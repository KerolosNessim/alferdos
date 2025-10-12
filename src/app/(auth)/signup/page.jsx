"use client"
import AuthSlider from '@/components/auth/auth-slider'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Footer from '@/components/shared/footer'
import Navavbar from '@/components/shared/navbar'
import Image from 'next/image'
import React, { useState } from 'react'
import * as motion from 'motion/react-client'
import StepOne from '@/components/auth/step-one'
import StepTwo from '@/components/auth/step-two'
const SignUpPage = () => {
  const [step, setStep] = useState(1)
  const [firstToken, setFirstToken] = useState(null)
  return (
    <>
      <Navavbar withbreadcrumb />
      <CustomBreadcrumbs items={[{ name: "تسجيل حساب" }]} />
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className='min-h-screen border rounded-xl container mb-20 grid grid-cols-5 overflow-hidden'>
        {/* slider */}
        <div className='lg:col-span-2 max-lg:hidden h-full bg-gradient-to-b form-[#435C3EA8] from-[#435C3EA8] to-[#435C3E] relative flex items-center justify-center'>
          <Image src={'/slider-bg.jpg'} alt='signup' fill className=' object-cover  -z-1' />
          {/* content */}
          <div className='text-white text-center space-y-4'>
            <Image src={'/full-logo.jpg'} alt='signup' width={100} height={100} className='w-20 mix-blend-luminosity mx-auto' />
            <h3 className='text-3xl font-bold'>تسجيل الحساب</h3>
            <p>يرجي كتابة البيانات الخاصة بك  علي مرحلتين</p>
            <AuthSlider />
          </div>
        </div>
        {/* form */}
        <div className='lg:col-span-3 max-lg:col-span-5 h-full w-full bg-white relative flex items-center justify-center'>
          <div className='lg:w-[60%] md:w-2/3 w-4/5 mx-auto space-y-12'>
            {/* steps */}
            <div className='w-50 space-y-4 mx-auto'>
              <div className='flex items-center justify-between text-xs '>
                <p className='font-bold text-secondary-green'>الخطوة الاولي</p>
                <p className={`${step === 2 ? "text-secondary-green" : "text-[#D6D6D6]"}`}>الخطوة الثانيه</p>
              </div>
              <div className='flex items-center justify-center'>
                <div className={`size-3 rounded-full   bg-secondary-green`}></div>
                <div className='w-30 h-[2px] bg-[#D6D6D6]'></div>
                <div className={`size-3 rounded-full ${step === 2 ? "bg-secondary-green" : "bg-[#D6D6D6]"} `}></div>
              </div>
            </div>
            {step === 1 ? <StepOne setStep={setStep} setFirstToken={setFirstToken} /> : <StepTwo firstToken={firstToken} />}
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  )
}

export default SignUpPage
