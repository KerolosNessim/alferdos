import Image from "next/image";
import {
  FaRegCalendarCheck,
  FaPhoneAlt,
  FaBarcode,
  FaIdCard,
  FaRegCalendarAlt,
  FaMoneyBillWave,
  FaDoorOpen,
  FaMapMarkerAlt,
  FaBriefcase,
  FaEnvelope,
  FaUserTie
} from "react-icons/fa";

const teacherData = [
  { label: "حالة التعيين", value: "مثبت", icon: FaRegCalendarCheck },
  { label: "الاسم الكامل", value: "محمد أحمد علي", icon: FaUserTie },
  { label: "الرقم القومي", value: "29805231567890", icon: FaIdCard },
  { label: "كود المعلم", value: "12998", icon: FaBarcode },
  { label: "رقم الهاتف", value: "01012345678", icon: FaPhoneAlt },
  { label: "البريد الإلكتروني", value: "teacher@example.com", icon: FaEnvelope },
  { label: "المادة الدراسية", value: "الرياضيات", icon: FaBriefcase },
  { label: "المرحلة الدراسية", value: "المرحلة الإعدادية", icon: FaDoorOpen },
  { label: "تاريخ التعيين", value: "01/09/2018", icon: FaRegCalendarAlt },
  { label: "الراتب الشهري", value: "7500 ج.م", icon: FaMoneyBillWave },
  { label: "العنوان", value: "15 شارع التحرير، القاهرة", icon: FaMapMarkerAlt },
];

const page = () => {
  return (
    <div>
      <div className='space-y-6'>
        <div className='w-fit space-y-2 max-md:mx-auto'>
          <h3 className='text-xl font-bold '>
            <span className='text-main-red w-fit'>البيانات</span>
            <span className='text-[#121212]'> الشخصية</span>
          </h3>
          <Image src={'/header-line.svg'} alt='line' width={1000} height={1000} className='w-20' />
        </div>

        <div className="flex flex-wrap gap-3">
          {teacherData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="border rounded-lg p-6 space-y-3 shadow-sm bg-white text-xs "
              >
                <div className='flex items-center gap-2'>
                  <Icon className="text-main-red" />
                  <p className="text-text font-bold">{item.label}</p>
                </div>
                <p className="text-secondary-green font-medium break-words">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default page