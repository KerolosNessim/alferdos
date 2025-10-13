import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const ResultStep1 = ({setStep}) => {
  const rows = [
    ["الثانويه", "الثاني", "1/3", "الرياضيات"],
    ["الثانويه", "الثاني", "1/3", "الرياضيات"],
    ["الاعداديه", "الثاني", "1/3", "الرياضيات"],
    ["الاعداديه", "الثاني", "1/3", "الرياضيات"],
    ["الابتدائيه", "الثاني", "1/3", "الرياضيات"],
  ]
  return (
    <div >
    <Table dir="rtl" className="w-full ">
      <TableHeader >
        <TableRow className="rounded border">
          {
            ["المرحله", "الصف", "الفصل", "الماده", "إضافة درجات"].map((item, index) => {
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
                  <button onClick={() => setStep(2)} className="bg-main-red text-white px-4 py-2 rounded cursor-pointer hover:bg-main-red/80 transition-colors duration-300">إضافة درجات</button>
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

export default ResultStep1
