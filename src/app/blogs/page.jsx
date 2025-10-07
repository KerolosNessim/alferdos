import BlogGrid from '@/components/shared/blog-grid'
import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Footer from '@/components/shared/footer'
import Navavbar from '@/components/shared/navbar'

const BlogsPage = () => {
  return (
    <>
      <Navavbar withbreadcrumb />
      <CustomBreadcrumbs items={[{ name: 'المدونة' }]} />
      <main>
        <section className='mb-20'>
          <BlogGrid />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default BlogsPage
