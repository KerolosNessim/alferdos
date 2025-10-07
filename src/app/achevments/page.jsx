import AchevmentGrid from '@/components/shared/achevment-grid'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Footer from '@/components/shared/footer'
import Navavbar from '@/components/shared/navbar'
const AchevmentsPage = () => {
  return (
    <>
      <Navavbar withbreadcrumb />
      <CustomBreadcrumbs items={[{ name: ' إنجازاتنا' }]} />
      <main>
        <section className='mb-20'>
          <AchevmentGrid />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AchevmentsPage
