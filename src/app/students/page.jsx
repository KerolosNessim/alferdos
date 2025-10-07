import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Footer from '@/components/shared/footer'
import Navavbar from '@/components/shared/navbar'
import StudentGrid from '@/components/shared/student-grid'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import * as motion from 'motion/react-client'
const StudentsPage = () => {
  const tabStyle = `relative text-base rounded-none  data-[state=active]:shadow-none data-[state=active]:text-secondary-green data-[state=active]:font-bold data-[state=active]:before:w-[65%] data-[state=active]:before:h-1 data-[state=active]:before:bg-main-red data-[state=active]:before:absolute data-[state=active]:before:-bottom-1 data-[state=active]:before:right-0  data-[state=active]:before:absolute p-0 mx-4`
  return (
    <>
      <Navavbar withbreadcrumb />
      <CustomBreadcrumbs items={[{ name: ' اوائل الطلاب ' }]} />
      <main>

        <section className='mb-20'>
          <Tabs dir="rtl" defaultValue="prim" className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='container flex items-center lg:gap-60 max-md:flex-col max-md:gap-4'>
              <TabsList className={"bg-transparent mx-auto"}>
                <TabsTrigger value="prim" className={tabStyle}>إبتدائي</TabsTrigger>
                <TabsTrigger value="prep" className={tabStyle}>إعدادي</TabsTrigger>
                <TabsTrigger value="sec" className={tabStyle}>ثانوي</TabsTrigger>
              </TabsList>
            </motion.div>
            <TabsContent value="prim">
              <StudentGrid/>
            </TabsContent>
            <TabsContent value="prep">
              <StudentGrid/>
            </TabsContent>
            <TabsContent value="sec">
              <StudentGrid/>
            </TabsContent>
          </Tabs>

        </section>
      </main>
      <Footer />
    </>
  )
}

export default StudentsPage
