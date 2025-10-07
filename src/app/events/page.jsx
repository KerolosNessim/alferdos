import EventGrid from '@/components/shared/event-grid'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Footer from '@/components/shared/footer'
import Navavbar from '@/components/shared/navbar'

const EventsPage = () => {
  return (
    <>
      <Navavbar withbreadcrumb />
      <CustomBreadcrumbs items={[{ name: 'الفعاليات' }]} />
      <main>
        <section className='mb-20'>
          <EventGrid />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default EventsPage
