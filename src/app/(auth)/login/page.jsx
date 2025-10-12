import AuthSlider from '@/components/auth/auth-slider'
import LoginForm from '@/components/auth/login-form'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Footer from '@/components/shared/footer'
import Navavbar from '@/components/shared/navbar'
import { Button } from '@/components/ui/button'
import * as motion from 'motion/react-client'
import Image from 'next/image'
const SignUpPage = () => {
  return (
    <>
      <Navavbar withbreadcrumb />
      <CustomBreadcrumbs items={[{ name: "تسجيل الدخول" }]} />
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
            <h3 className='text-3xl font-bold'>تسجيل الدخول</h3>
            <p>يرجي كتابة البيانات الخاصة لتسجيل الدخول</p>
            <AuthSlider />
          </div>
        </div>
        {/* form */}
        <div className='lg:col-span-3 max-lg:col-span-5 h-full w-full bg-white relative flex items-center justify-center'>
          <div className='lg:w-[60%] md:w-2/3 w-4/5 mx-auto space-y-12'>
            <h3 className='text-3xl font-bold text-center text-secondary-green'>تسجيل الدخول</h3>
            <div className='flex items-center gap-4 justify-center'>
              <Button className={"bg-secondary-green text-white px-8 h-12"}>طالب</Button>
              <Button className={"bg-main-yellow text-white px-8 h-12"}>ولي أمر</Button>
              <Button className={"bg-main-red text-white px-8 h-12"}>مدرس</Button>

            </div>
            <LoginForm />
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  )
}

export default SignUpPage
