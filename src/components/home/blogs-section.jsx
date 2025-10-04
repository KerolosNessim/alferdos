import React from 'react'

import * as motion from 'motion/react-client'
import SectionHeader from '../shared/section-header'
import AchevmentsSlider from '../shared/achevments-slider'
import BlogsSlider from '../shared/blogs-slider'
import Autoplay from "embla-carousel-autoplay"

const BlogsSection = () => {
  return (
    <section className=' border-t-2 border-main-red/10'>
      <div className='pt-20 container space-y-8'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <SectionHeader title={'مدونة  المدرسة'} />
        </motion.div>
        <BlogsSlider />
      </div>
    </section>

  )
}

export default BlogsSection
