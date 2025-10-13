import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { PiUserGearThin } from "react-icons/pi";
import { CiCreditCard2 } from "react-icons/ci";
import ResultForm from './result-form';

const ResultStep3 = ({ month, week }) => {
  function getMonthNameByIndex(index) {
    const date = new Date(2025, index); // هنا index من 0 إلى 11
    return date.toLocaleString("ar-EG", { month: "long" });
  }
  return (
    <div>
      <div className='bg-main-red/20 border border-main-red p-6 rounded-xl mb-10 '>
        <h3 className=' font-bold text-center'>
          تقييم الاسبوع {week=="1" ? "الأول" : week=="2" ? "الثاني" : week=="3" ? "الثالث" : "الرابع"} من شهر {getMonthNameByIndex(month)} 
      </h3>
      </div>

      {/* search */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>

        <div className='space-y-2'>
          <Label>بحث بواسطة الاسم</Label>
          <div className='relative'>
            <Input type="text" placeholder='بحث بواسطة اسم الطالب' className='!h-14' />
            <PiUserGearThin className='size-5 absolute top-1/2 -translate-y-1/2 left-3 text-text' />
          </div>
        </div>
        <div className='space-y-2'>
          <Label>بحث بواسطة الرقم القومي</Label>
          <div className='relative'>
            <Input type="text" placeholder='بحث بواسطة الرقم القومي' className='!h-14' />
            <CiCreditCard2 className='size-5 absolute top-1/2 -translate-y-1/2 left-3 text-text' />
          </div>
        </div>
      </div>
      {/* form */}
      <ResultForm month={month} week={week} />
    </div>
  )
}

export default ResultStep3
