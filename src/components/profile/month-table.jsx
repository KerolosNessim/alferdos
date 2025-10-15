"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { getData } from "@/lib/fetch-methods";

export default function MonthlyExamTable() {
  const [exams, setExams] = useState([]);

  async function getMonthlyExams() {
    const res = await getData({
      url: "/monthly-exams",
    });

    if (res?.code === 200 && res?.data?.data?.length > 0) {
      setExams(res.data.data);
    } else {
      setExams([]);
    }
  }

  useEffect(() => {
    getMonthlyExams();
  }, []);

  return (
    <div className="overflow-x-auto">
      <Table className="text-center border-collapse min-w-full">
        <TableHeader>
          <TableRow className="border border-gray-300 bg-gray-100">
            <TableHead className="font-bold border border-gray-300 text-center text-secondary-green bg-secondary-green/20 p-6">
              المادة
            </TableHead>
            <TableHead className="font-bold border border-gray-300 text-center text-main-red p-6">
              التقييم الأول
            </TableHead>
            <TableHead className="font-bold border border-gray-300 text-center text-main-red p-6">
              التقييم الثاني
            </TableHead>
            <TableHead className="font-bold border border-gray-300 text-center text-main-red p-6">
              المتوسط
            </TableHead>
            <TableHead className="font-bold border border-gray-300 text-center text-main-red p-6">
              التقدير
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {exams.length > 0 ? (
            exams.map((item, i) => (
              <TableRow key={i} className="border border-gray-300">
                <TableCell className="border border-gray-300 font-semibold p-6">
                  {item.subject.name}
                </TableCell>
                <TableCell className="border border-gray-300 p-6">
                  {item.monthly_exams.midterm_exam}
                </TableCell>
                <TableCell className="border border-gray-300 p-6">
                  {item.monthly_exams.second_midterm_exam}
                </TableCell>
                <TableCell className="border border-gray-300 p-6">
                  {item.monthly_exams.avg_midterm_exams}
                </TableCell>
                <TableCell className="border border-gray-300 font-bold p-6">
                  يفوق التوقعات
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center text-gray-500 p-6"
              >
                لا توجد بيانات متاحة حاليًا 📊
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
