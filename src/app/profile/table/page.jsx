import ClassTable from '@/components/profile/class-table'
import Image from 'next/image'

const Tablepage = () => {
  return (
    <div className='space-y-6'>
      {/* title */}
      <div className='w-fit space-y-2 max-md:mx-auto'>
        <h3 className='text-xl font-bold '>
          <span className='text-main-red w-fit'>الجدول</span>
          <span className='text-[#121212]'> الدراسي</span>
        </h3>
        <Image src={'/header-line.svg'} alt='line' width={1000} height={1000} className=' w-20 ' />
      </div>

      <ClassTable/>
    </div>
  )
}

export default Tablepage
