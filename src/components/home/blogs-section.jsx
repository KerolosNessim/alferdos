import React from 'react'

import * as motion from 'motion/react-client'
import SectionHeader from '../shared/section-header'
import AchevmentsSlider from '../shared/achevments-slider'
import BlogsSlider from '../shared/blogs-slider'
import Autoplay from "embla-carousel-autoplay"
import { getData } from '@/lib/fetch-methods'

const BlogsSection = async () => {
  let data;
  const res = await getData({ url: '/blogs' })
  if (res.code == 200) {
    data = res?.data?.data
  }
  else {
    data = []
  }
  return (

    <>
      {
        data?.length > 0 ? (

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
              <BlogsSlider data={data} />
            </div>
          </section>
        ) : (
          null
        )
      }

    </>

  )
}

export default BlogsSection
