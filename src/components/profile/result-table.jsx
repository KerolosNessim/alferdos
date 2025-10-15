"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getData } from "@/lib/fetch-methods";

const mockResponse = {
  data: {
    student_id: 1,
    student_name: "أحمد محمود علي",
    stage: "المرحلة الابتدائية",
    grade: "الصف الأول الابتدائي",
    classroom: "أ",
    total_subjects: 3,
    passed_subjects: 2,
    failed_subjects: 1,
    total_score: 215,
    average_score: 71.66,
    subjects: [
      {
        subject_name: "اللغة العربية",
        homework_score: 10,
        activity_score: 10,
        class_participation: 10,
        performance_task: 10,
        weekly_test: 10,
        midterm_exam: "25.00",
        second_midterm_exam: "30.00",
        total_score: "105.00",
        result: "ناجح",
      },
      {
        subject_name: "الرياضيات",
        homework_score: 5,
        activity_score: 5,
        class_participation: 5,
        performance_task: 5,
        weekly_test: 5,
        midterm_exam: "10.00",
        second_midterm_exam: "10.00",
        total_score: "45.00",
        result: "راسب",
      },
      {
        subject_name: "العلوم",
        homework_score: 8,
        activity_score: 8,
        class_participation: 8,
        performance_task: 8,
        weekly_test: 8,
        midterm_exam: "15.00",
        second_midterm_exam: "18.00",
        total_score: "65.00",
        result: "ناجح",
      },
    ],
  },
};

export default function Resulttable() {
  const [studentData, setStudentData] = useState(null);

  async function getStudentData() {
    const res = await getData({
      url: "/final-results",
    });

    if (res?.code === 200 && res?.data?.data) {
      setStudentData(res?.data?.data);
    } else {
      setStudentData(null);
    }
  }

  useEffect(() => {
    getStudentData();
  }, []);

  if (!studentData) {
    return <p className="text-center text-gray-500">جاري التحميل...</p>;
  }

  const cellClass = "p-6 text-center border border-gray-200 ";

  return (
    <div className="p-6 space-y-4">
      {/* 🧍 بيانات الطالب */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-center text-main-red">
            بيانات الطالب
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          <div>
            <span className="font-semibold text-secondary-green">الاسم:</span> {studentData?.student_name}
          </div>
          <div>
            <span className="font-semibold text-secondary-green">المرحلة:</span> {studentData?.stage}
          </div>
          <div>
            <span className="font-semibold text-secondary-green">الصف:</span> {studentData?.grade}
          </div>
          <div>
            <span className="font-semibold text-secondary-green">الفصل:</span> {studentData?.classroom}
          </div>
          <div>
            <span className="font-semibold text-secondary-green">عدد المواد:</span> {studentData?.total_subjects}
          </div>
          <div>
            <span className="font-semibold text-secondary-green">ناجح:</span> {studentData?.passed_subjects}
          </div>
          <div>
            <span className="font-semibold text-secondary-green">راسب:</span> {studentData?.failed_subjects}
          </div>
          <div>
            <span className="font-semibold text-secondary-green">الدرجة الكلية:</span> {studentData?.total_score}
          </div>
        </CardContent>
      </Card>

      {/* 📊 جدول الدرجات */}
          <h3 className="text-lg font-bold text-center text-main-red">
            درجات المواد
          </h3>


          <Table >
        <TableCaption className="pb-6">الدرجات التفصيلية لكل مادة</TableCaption>
            <TableHeader>
              <TableRow className="bg-gray-100 ">
                <TableHead className={`${cellClass} text-main-red font-bold`}>المادة</TableHead>
                <TableHead className={`${cellClass} text-main-red font-bold`}>الواجب</TableHead>
                <TableHead className={`${cellClass} text-main-red font-bold`}>النشاط</TableHead>
                <TableHead className={`${cellClass} text-main-red font-bold`}>المشاركة</TableHead>
                <TableHead className={`${cellClass} text-main-red font-bold`}>مهمة الأداء</TableHead>
                <TableHead className={`${cellClass} text-main-red font-bold`}>اختبار أسبوعي</TableHead>
                <TableHead className={`${cellClass} text-main-red font-bold`}>امتحان نصف الترم</TableHead>
                <TableHead className={`${cellClass} text-main-red font-bold`}>امتحان ثاني</TableHead>
                <TableHead className={`${cellClass} text-main-red font-bold`}>الدرجة النهائية</TableHead>
                <TableHead className={`${cellClass} text-main-red font-bold`}>النتيجة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentData?.subjects?.map((subject, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <TableCell className={cellClass}>{subject?.subject_name}</TableCell>
                  <TableCell className={cellClass}>{subject?.homework_score}</TableCell>
                  <TableCell className={cellClass}>{subject?.activity_score}</TableCell>
                  <TableCell className={cellClass}>{subject?.class_participation}</TableCell>
                  <TableCell className={cellClass}>{subject?.performance_task}</TableCell>
                  <TableCell className={cellClass}>{subject?.weekly_test}</TableCell>
                  <TableCell className={cellClass}>{subject?.midterm_exam}</TableCell>
                  <TableCell className={cellClass}>{subject?.second_midterm_exam}</TableCell>
                  <TableCell className={cellClass}>{subject?.total_score}</TableCell>
                  <TableCell
                    className={`${cellClass} ${subject?.result === "ناجح"
                        ? "text-green-600 font-bold"
                        : "text-red-600 font-bold"
                      }`}
                  >
                    {subject?.result}
                  </TableCell>
                </TableRow>
              ))}

              {/* 🏁 التقييم النهائي */}
              <TableRow className="bg-main-orange/10 font-bold">
                <TableCell colSpan={8} className={`${cellClass} text-main-red`}>
                  التقييم الكلي
                </TableCell>
                <TableCell className={cellClass}>{studentData?.total_score}</TableCell>
                <TableCell
                  className={`${cellClass} ${studentData?.average_score >= 50
                      ? "text-green-600"
                      : "text-red-600"
                    }`}
                >
                  {studentData?.average_score >= 50 ? "ناجح" : "راسب"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

    </div>
  );
}
