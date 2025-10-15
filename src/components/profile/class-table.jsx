"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getData } from "@/lib/fetch-methods"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ClassTable() {
  const [tableData, setTableData] = useState([])
  const [times, setTimes] = useState([])

  async function getTable() {
    const res = await getData({
      url: "/student/timetable",
    })
    console.log(res)
    if (res?.code === 200 && res?.data?.data?.rows?.length > 0) {
      const rows = res?.data?.data?.rows
      setTableData(rows)

      // نجيب أوقات الحصص من أول يوم
      const extractedTimes = rows[0].periods.map((p) => p.time)
      setTimes(extractedTimes)
    } else {
      setTableData([])
      setTimes([])
    }
  }

  useEffect(() => {
    getTable()
  }, [])

  return (
    <div className="overflow-x-auto">
      {tableData.length > 0 ? (
        <Table className="text-center border-collapse lg:w-3/4 overflow-hidden">
          <TableHeader>
            <TableRow className="border border-gray-300">
              <TableHead className="font-bold text-secondary-green border border-gray-300 p-5 space-y-2">
                <Image
                  src={"/calender.svg"}
                  alt="calendar"
                  width={1000}
                  height={1000}
                  className="w-4 mx-auto"
                />
                <p className="text-center">اليوم</p>
              </TableHead>

              {times.map((time, i) => (
                <TableHead
                  key={i}
                  className="text-secondary-green font-semibold text-center border border-gray-300 p-5 space-y-2"
                >
                  <Image
                    src={"/clock.svg"}
                    alt="clock"
                    width={1000}
                    height={1000}
                    className="w-4 mx-auto"
                  />
                  <p>{time}</p>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {tableData.map((day, index) => (
              <TableRow key={index} className="border border-gray-300">
                <TableCell
                  className="font-bold text-main-red border border-gray-300 p-4"
                >
                  {day.day}
                </TableCell>

                {day.periods.map((period, i) => (
                  <TableCell
                    key={i}
                    className="border border-gray-300 p-5 text-center"
                  >
                    <div className="flex flex-col items-center gap-1 text-xs">
                      <p className="font-semibold text-text">{period.subject}</p>
                      {/* لو عندك مدرس ممكن تضيفه هنا */}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center text-gray-500 py-10">
          لا توجد بيانات جدول متاحة حاليًا 📅
        </p>
      )}
    </div>
  )
}
