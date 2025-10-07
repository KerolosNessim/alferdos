import CustomBreadcrumbs from '@/components/shared/custom-breadcrumbs'
import Footer from '@/components/shared/footer'
import Navavbar from '@/components/shared/navbar'
import Image from 'next/image'
import * as motion from 'motion/react-client'

const SingleEventPage = ({ params }) => {
  return (
    <>
      <Navavbar withbreadcrumb />
      <CustomBreadcrumbs items={[{ name: 'الفاعليات', href: '/events' }, { name: 'تفاصيل الفعالية' }]} />

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
                src="/event.jpg"
                alt="event image"
                fill
                className='object-cover '
              />
              {/* date */}
              <div className="absolute z-1 top-[79%] right-2 h-10 bg-main-red flex items-center mb-4 text-sm font-semibold text-white w-fit pe-3 gap-4">
                <div className="h-full px-4 bg-white flex items-center justify-center">
                  <Image
                    src="/date.svg"
                    alt="date"
                    width={1000}
                    height={1000}
                    className="size-7"
                  />
                </div>
                <div>
                  {"13 يناير 2026"}
                </div>
              </div>
            </div>

            {/*  Content */}
            <div className='border-[20px] border-bg-green bg-white p-12 rounded-3xl flex max-lg:flex-col max-lg:gap-8 -translate-y-8 '>
              {/* Title */}
              <div className='space-y-4 lg:w-1/3 w-full shrink-0'>
                <h1 className='text-2xl lg:text-4xl font-bold text-text text-right lg:leading-14'>
                  عنوان الفعالية
                </h1>
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

export default SingleEventPage
