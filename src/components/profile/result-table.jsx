"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ResultTable() {
  const subjects = [
    "",
    "العربي",
    "الإنجليزية",
    "الرياضيات",
    "كيمياء",
    "فيزياء",
    "مادة أخرى",
    "علم نفس",
  ]

  const data = {
    grade: [32, 32, 32, 32, 32, 32, 32],
    pass: [25, 25, 25, 25, 25, 25, 25],
    total: [50, 50, 50, 50, 50, 50, 50],
  }

  const rows = [
    { label: "الدرجة", values: data.grade },
    { label: "درجة النجاح", values: data.pass },
    { label: "الدرجة الإجمالية", values: data.total },
  ]

  return (
    <div className="w-full overflow-x-auto" dir="rtl">
      <Table dir="rtl" className="lg:w-3/4   text-center text-xs rounded-lg overflow-hidden">
        <TableHeader >
          <TableRow className="bg-[#5B5B5B] border-white/10 hover:bg-[#5B5B5B] ">
            {subjects.map((subject, index) => (
              <TableHead
                key={index}
                className="font-bold text-center border-r border-white/10 text-white"
              >
                {subject}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              className="border-white/10 bg-[#5B5B5B] text-white hover:bg-[#5B5B5B] transition-colors"
            >
              <TableCell className="font-semibold text-center bg-[#5B5B5B] text-white border-r border-white/10">
                {row.label}
              </TableCell>
              {row.values.map((value, j) => (
                <TableCell
                  key={j}
                  className="text-center border-r border-white/10 py-3"
                >
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
