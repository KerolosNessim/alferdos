import React from 'react'
import SectionHeader from '../shared/section-header'
import StudentSlider from '../shared/student-slider'
import * as motion from 'motion/react-client'
import AchevmentsSlider from '../shared/achevments-slider'
const AchevmentsSection = () => {
  return (
    <section className=' border-t-2 border-main-red/10'>
      <div className='py-20 container space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <SectionHeader title={'إنجازات  مدرستنا'} />
        </motion.div>
        <AchevmentsSlider />
      </div>
    </section>

  )
}

export default AchevmentsSection
