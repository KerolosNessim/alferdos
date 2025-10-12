import React from 'react'
import SectionHeader from '../shared/section-header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StudentSlider from '../shared/student-slider'
import * as motion from 'motion/react-client'
import { getData } from '@/lib/fetch-methods'

const StudentsSection = async () => {
  const tabStyle = `relative text-base rounded-none  data-[state=active]:shadow-none data-[state=active]:text-secondary-green data-[state=active]:font-bold data-[state=active]:before:w-[65%] data-[state=active]:before:h-1 data-[state=active]:before:bg-main-red data-[state=active]:before:absolute data-[state=active]:before:-bottom-1 data-[state=active]:before:right-0  data-[state=active]:before:absolute p-0 mx-4`
  let data
  const res = await getData({ url: "/top-students" })
  if (res.code == 200) {
    data = res?.data?.data
  }
  else {
    data = []
  }
  return (
    <>
      {
        data.length == 0 ? null :
          <section className='py-20'>
            <Tabs dir="rtl" defaultValue="prim" className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='container flex items-center lg:gap-60 max-md:flex-col max-md:gap-4'>
                <SectionHeader title='أوائل  الطلبة' />
                <TabsList className={"bg-transparent "}>
                  <TabsTrigger value="prim" className={tabStyle}>إبتدائي</TabsTrigger>
                  <TabsTrigger value="prep" className={tabStyle}>إعدادي</TabsTrigger>
                  <TabsTrigger value="sec" className={tabStyle}>ثانوي</TabsTrigger>
                </TabsList>
              </motion.div>
              <TabsContent value="prim">
                <StudentSlider data={data?.prim}/>
              </TabsContent>
              <TabsContent value="prep">
                <StudentSlider data={data?.prep}/>
              </TabsContent>
              <TabsContent value="sec">
                <StudentSlider data={data?.sec}/>
              </TabsContent>
            </Tabs>

          </section>
      }
    </>
  )
}

export default StudentsSection
