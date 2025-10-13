import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link'
const StudentsResultesPage = () => {
  const rows = [
    ["محمد سعيد ابراهيم", "3020108765123", "الثانويه","95%"],
    ["محمد سعيد ابراهيم", "3020108765123", "الثانويه","95%"],
    ["محمد سعيد ابراهيم", "3020108765123", "الاعداديه","95%"],
    ["محمد سعيد ابراهيم", "3020108765123", "الاعداديه","95%"],
    ["محمد سعيد ابراهيم", "3020108765123", "الابتدائيه","95%"],
  ]
  return (
    <div className="space-y-6">
      {/* title */}
      <div className='w-fit space-y-2 max-md:mx-auto'>
        <h3 className='text-xl font-bold '>
          <span className='text-main-red w-fit'>تقييمات</span>
          <span className='text-[#121212]'> الطلاب</span>
        </h3>
        <Image src={'/header-line.svg'} alt='line' width={1000} height={1000} className=' w-20 ' />
      </div>

          <Table dir="rtl" className="w-full ">
            <TableHeader >
              <TableRow className="rounded border">
                {
                  ["الاسم", "الرقم القومي", "المرحله", "الدرجه النهائيه", "التفاصيل"].map((item, index) => {
                    return (
                      <TableHead key={index} className="text-center font-bold text-main-red border p-4">{item}</TableHead>
                    )
                  })
                }
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                rows.map((row, index) => {
                  return (
                    <TableRow key={index}>
                      {
                        row.map((item, index) => {
                          return (
                            <TableCell key={index} className="text-center p-4 first:font-bold first:text-main-red border">{item}</TableCell>
                          )
                        })
                      }
                      <TableCell className="text-center p-4 border">
                        <Link href={'/teacher/students-resultes/1'}  className="bg-main-red text-white px-4 py-2 rounded cursor-pointer hover:bg-main-red/80 transition-colors duration-300">تفاصيل الدرجات</Link>
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
    </div>
  )
}

export default StudentsResultesPage
