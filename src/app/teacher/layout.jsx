import LoginForm from '@/components/auth/login-form'
import ProfileNavbar from '@/components/profile/profile-nav'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Footer from '@/components/shared/footer'
import Navavbar from '@/components/shared/navbar'
import TeacherNavbar from '@/components/teacher/teacher-navbar'
import * as motion from 'motion/react-client'
import Image from 'next/image'

const TeacherLayout = ({ children }) => {
  return (
    <>
      <Navavbar withbreadcrumb />
      <CustomBreadcrumbs items={[{ name: "الملف الشخصي" }]} />
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className=' border rounded-xl container mb-20 grid grid-cols-5 overflow-hidden'>
        {/* slider */}
        <div className='lg:col-span-1 col-span-5 relative p-6 lg:border-l border-b max-lg:h-fit space-y-5'>
          {/* user image */}
          <div className='lg:py-6 py-3 lg:border-b lg:space-y-4 space-y-2'>
            <div className='relative  '>
              <Image src={'/teacher.jpg'} alt='signup' width={100} height={100} className='lg:size-24 size-20 object-cover object-top rounded-full  mx-auto' />
              {/* ring */}
              <div className='lg:size-24 size-20 border-3 border-main-red rounded-full absolute top-[45%] left-[45%] -translate-1/2 -z-1'></div>
            </div>
            <div className='text-center space-y-0.5'>
              <h3 className='text-lg font-bold  text-text'>مهدي سعيد</h3>
              <p className='text-[10px] text-text-gray'>مدرس الرياضيات</p>
            </div>
          </div>
          {/* menu */}
          <TeacherNavbar />
        </div>
        {/* form */}
        <div className='lg:col-span-4 col-span-5 max-lg:col-span-5 h-full lg:p-12 p-6 '>
          {children}
        </div>
      </motion.main>
      <Footer />
    </>
  )
}

export default TeacherLayout
