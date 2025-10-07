import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Footer from '@/components/shared/footer'
import Navavbar from '@/components/shared/navbar'
import Image from 'next/image'
import * as motion from 'motion/react-client'

const SingleBlogPage = ({ params }) => {
  return (
    <>
      <Navavbar withbreadcrumb />
      <CustomBreadcrumbs items={[{ name: 'المقالات', href: '/blogs' }, { name: 'تفاصيل المقالة' }]} />

      <main className='pb-20'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='container'>

          <div className=''>
            {/*  Image */}
            <div className='relative h-96 lg:w-[95%] rounded-tl-4xl overflow-hidden'>
              <Image
                src="/blog.jpg"
                alt="blog image"
                fill
                className='object-cover'
              />
            </div>

            {/*  Content */}
            <div className='border-[20px] border-bg-green bg-white p-12 rounded-3xl flex max-lg:flex-col max-lg:gap-8 -translate-y-8 '>
              {/* Title */}
              <div className='space-y-4 lg:w-1/3 w-full shrink-0'>
                <h1 className='text-2xl lg:text-4xl font-bold text-text text-right lg:leading-14'>
                  أهمية
                  توفير باصات الطلبة
                </h1>

                {/* Author & Date */}

                <div className='flex items-center gap-2'>
                  <div className='w-8 h-8 rounded-full bg-gray-200 overflow-hidden'>
                    <Image
                      src="/logo.png"
                      alt="author"
                      width={32}
                      height={32}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <span className='text-sm text-text-gray'>بواسطة أحمد محمد</span>
                </div>
              </div>
              {/* content */}
              <div className='lg:w-2/3 w-full space-y-8'>
                {/* Section 1 */}
                <div className='space-y-4'>
                  <h2 className='text-xl lg:text-2xl font-bold text-text p-2 border-r-4 border-main-red'>
                    أهمية كبيرة في حدوث تطور عبر تحديث التقنية بشكل مستمر
                  </h2>
                  <p className='text-xs  text-text-gray leading-7 text-right'>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو وكأنها نص مقروء.
                  </p>
                  <p className='text-xs  text-text-gray leading-7 text-right'>
                    العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
                  </p>
                </div>
                {/* Section 2 */}
                <div className='space-y-4'>
                  <h2 className='text-xl lg:text-2xl font-bold text-text p-2 border-r-4 border-main-yellow'>
                    حل يحتاج أولادك للتواصل دوماً
                  </h2>
                  <p className='text-xs  text-text-gray leading-7 text-right'>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو وكأنها نص مقروء.
                  </p>
                </div>
                {/* Section 3 */}
                <div className='space-y-4'>
                  <h2 className='text-xl lg:text-2xl font-bold text-text text-right p-2 border-r-4 border-secondary-green'>
                    تحديث التقنية بشكل مستمر
                  </h2>
                  <p className='text-xs  text-text-gray leading-7 text-right'>
                    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  )
}

export default SingleBlogPage
