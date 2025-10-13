"use client"
import ResultStep1 from "@/components/teacher/result-step1"
import ResultStep2 from "@/components/teacher/result-step2"
import ResultStep3 from "@/components/teacher/result-step3"
import Image from "next/image"
import { useState } from "react"
const TeacherResultPage = () => {
  const [step, setStep] = useState(1)
  const [month, setMonth] = useState("")
  const [week, setWeek] = useState("")


  return (
    <div className="space-y-6">
      {/* title */}
      <div className='w-fit space-y-2 max-md:mx-auto'>
        <h3 className='text-xl font-bold '>
          <span className='text-main-red w-fit'>نتائج</span>
          <span className='text-[#121212]'> الطلاب</span>
        </h3>
        <Image src={'/header-line.svg'} alt='line' width={1000} height={1000} className=' w-20 ' />
      </div>

      {step === 1 && <ResultStep1 setStep={setStep} />}
      {step === 2 && <ResultStep2 setStep={setStep} setMonth={setMonth} setWeek={setWeek} />}
      {step === 3 && <ResultStep3 month={month} week={week} />}

    </div>
  )
}

export default TeacherResultPage
