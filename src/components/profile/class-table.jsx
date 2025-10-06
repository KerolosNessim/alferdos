"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"

const days = [
  { name: "السبت", color: "text-main-red" },
  { name: "الأحد", color: "text-main-red" },
  { name: "الإثنين", color: "text-main-red" },
  { name: "الثلاثاء", color: "text-main-red" },
  { name: "الأربعاء", color: "text-main-red" },
  { name: "الخميس", color: "text-main-red" },
]

const times = [
  "8:45_9:30",
  "8:45_9:30",
  "8:45_9:30",
  "8:45_9:30",
  "8:45_9:30",
  "8:45_9:30",

]

export default function ClassTable() {
  return (
    <div className="overflow-x-auto ">
      <Table className=" text-center border-collapse lg:w-3/4  overflow-hidden">
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
                <p>{time.replace("_", " - ")}</p>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {days.map((day, index) => (
            <TableRow key={index} className="border border-gray-300">
              <TableCell
                className={`font-bold ${day.color} border border-gray-300 p-4`}
              >
                {day.name}
              </TableCell>

              {times.map((_, i) => (
                <TableCell
                  key={i}
                  className="border border-gray-300 p-5 text-center"
                >
                  <div className="flex flex-col items-center gap-1 text-xs">
                    <p className="font-semibold text-text">
                      {i % 2 === 0 ? "لغة عربية" : "كيمياء عضوية"}
                    </p>
                    <p className=" text-secondary-green text-[10px]">
                      {i % 2 === 0 ? "أ/ محمد الجندي" : "أ/ عادل سعيد"}
                    </p>
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
