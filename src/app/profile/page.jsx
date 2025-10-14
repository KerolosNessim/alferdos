import UpdateForm from '@/components/profile/update-form'
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {
  FaRegCalendarCheck,
  FaPray,
  FaPhoneAlt,
  FaBarcode,
  FaIdCard,
  FaRegCalendarAlt,
  FaFileInvoice,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaDoorOpen,
  FaPhone,
  FaBriefcase,
  FaMapMarkerAlt,
  FaIdCardAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";
const ProfilePage = () => {
  const studentData = [
    { label: "حالة القيد", value: "مقيد", icon: FaRegCalendarCheck },
    { label: "الديانة", value: "مسلم", icon: FaPray },
    { label: "رقم الهاتف", value: "01034678890", icon: FaPhoneAlt },
    { label: "الكود", value: "234455", icon: FaBarcode },
    { label: "الرقم القومي", value: "045543342221", icon: FaIdCard },
    { label: "تاريخ السداد", value: "17/2/2025", icon: FaRegCalendarAlt },
    { label: "رقم قسيمة سداد المصروفات", value: "34435", icon: FaFileInvoice },
    { label: "الرسوم المدرسية", value: "712 م", icon: FaMoneyBillWave },
    { label: " التحويلات المدرسية", value: "لا يوجد", icon: FaExchangeAlt },
    { label: "رقم الفصل", value: "4", icon: FaDoorOpen },
    { label: "رقم هاتف ولي الأمر", value: "01034678890", icon: FaPhone },
    { label: "عمل ولي الأمر", value: "مدير بنك البركة", icon: FaBriefcase },
    { label: "عنوان ولي الأمر", value: "اسم المبني، الشارع، المدينة", icon: FaMapMarkerAlt },
    { label: "الرقم القومي لولي الأمر", value: "045543342221", icon: FaIdCardAlt },
    { label: "مبلغ السداد", value: "500 م", icon: FaMoneyCheckAlt },
  ];
  return (
    <div className='space-y-6'>
      <div className='w-fit space-y-2 max-md:mx-auto'>
        <h3 className='text-xl font-bold '>
          <span className='text-main-red w-fit'>البيانات</span>
          <span className='text-[#121212]'> الشخصية</span>
        </h3>
        <Image src={'/header-line.svg'} alt='line' width={1000} height={1000} className=' w-20 ' />
      </div>
      <div className="flex flex-wrap gap-3">
        {studentData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className=" border rounded-lg p-6  space-y-3  shadow-sm bg-white text-xs"
            >
              <div className='flex items-center gap-2 '>
              <Icon className="text-main-red" />
                <p className=" text-text font-bold">{item.label}</p>
              </div>
                <p className="text-secondary-green font-medium">{item.value}</p>
            </div>
          );
        })}
      </div>
      <Link href={'/profile/update-data'}>
        <Button className='bg-secondary-green h-12'>
          تحديث البيانات الشخصية
        </Button>
      </Link>

    </div>
  )
}

export default ProfilePage
