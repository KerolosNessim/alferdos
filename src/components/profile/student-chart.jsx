"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: 2015, الواجبات: 25, الاختبارات: 0 },
  { year: 2016, الواجبات: 65, الاختبارات: 55 },
  { year: 2017, الواجبات: 55, الاختبارات: 35 },
  { year: 2018, الواجبات: 50, الاختبارات: 40 },
  { year: 2019, الواجبات: 100, الاختبارات: 90 },
];

export default function StudentChart() {
  return (
    <div className="w-full h-[400px]">
      <h2 className="text-xl font-bold text-end mb-4">تقييم الطالب</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" align="right" />
          <Line
            type="monotone"
            dataKey="الواجبات"
            stroke="#c0392b"
            strokeWidth={2}
            dot
          />
          <Line
            type="monotone"
            dataKey="الاختبارات"
            stroke="#2e4d2e"
            strokeWidth={2}
            dot
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
