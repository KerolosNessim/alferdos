"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Image from "next/image"

// ✅ تعريف السكيمة مع الحدود القصوى
const formSchema = z.object({
  homework: z
    .number({ invalid_type_error: "يجب إدخال رقم" })
    .max(5, "الحد الأقصى 5")
    .min(0, "لا يمكن أن تكون أقل من 0"),
  activity: z
    .number({ invalid_type_error: "يجب إدخال رقم" })
    .max(5, "الحد الأقصى 5")
    .min(0),
  weekly: z
    .number({ invalid_type_error: "يجب إدخال رقم" })
    .max(5, "الحد الأقصى 5")
    .min(0),
  performance: z
    .number({ invalid_type_error: "يجب إدخال رقم" })
    .max(10, "الحد الأقصى 10")
    .min(0),
  behavior: z
    .number({ invalid_type_error: "يجب إدخال رقم" })
    .max(5, "الحد الأقصى 5")
    .min(0),
  exam: z
    .number({ invalid_type_error: "يجب إدخال رقم" })
    .max(10, "الحد الأقصى 10")
    .min(0).optional(),
})

export default function ResultForm({ month, week }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      homework: 0,
      activity: 0,
      weekly: 0,
      performance: 0,
      behavior: 0,
      exam: 0,
    },
  })

  // ✅ مراقبة القيم لحساب المجموع لحظيًا
  const homework = form.watch("homework") || 0
  const activity = form.watch("activity") || 0
  const weekly = form.watch("weekly") || 0
  const performance = form.watch("performance") || 0
  const behavior = form.watch("behavior") || 0
  const exam = form.watch("exam") || 0

  const total = homework + activity + weekly + performance + behavior + exam

  function onSubmit(values) {
    console.log("الدرجات:", values)
    console.log("الدرجة النهائية:", total)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6  mt-10">
        {/* title */}
        <div className='w-fit space-y-2 max-md:mx-auto'>
          <h3 className='text-xl font-bold '>
            <span className='text-main-red w-fit'>إضافة</span>
            <span className='text-[#121212]'> درجات</span>
          </h3>
          <Image src={'/header-line.svg'} alt='line' width={1000} height={1000} className=' w-20 ' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* كراسة الواجب */}
          <FormField
            control={form.control}
            name="homework"
            render={({ field }) => (
              <FormItem >
                <FormLabel>كراسة الواجب (5)</FormLabel>
                <FormControl>
                  <Input
                    dir="rtl"
                    className="w-full !h-14"
                    type="number"
                    step="0.1"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* كراسة النشاط */}
          <FormField
            control={form.control}
            name="activity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>كراسة النشاط (5)</FormLabel>
                <FormControl>
                  <Input
                    dir="rtl"
                    className="w-full !h-14"
                    type="number"
                    step="0.1"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* التقييم الأسبوعي */}
          <FormField
            control={form.control}
            name="weekly"
            render={({ field }) => (
              <FormItem>
                <FormLabel>التقييم الأسبوعي (5)</FormLabel>
                <FormControl>
                  <Input
                    dir="rtl"
                    className="w-full !h-14"
                    type="number"
                    step="0.1"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* المهام الأدائية */}
          <FormField
            control={form.control}
            name="performance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>المهام الأدائية (10)</FormLabel>
                <FormControl>
                  <Input
                    dir="rtl"
                    className="w-full !h-14"
                    type="number"
                    step="0.1"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* المواظبة والسلوك */}
          <FormField
            control={form.control}
            name="behavior"
            render={({ field }) => (
              <FormItem>
                <FormLabel>المواظبة والسلوك (5)</FormLabel>
                <FormControl>
                  <Input
                    dir="rtl"
                    className="w-full !h-14"
                    type="number"
                    step="0.1"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* الامتحان */}
          {(month == "9" || month == "10") && week == "3" && (
            <FormField
              control={form.control}
              name="exam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الامتحان (10)</FormLabel>
                  <FormControl>
                    <Input
                      dir="rtl"
                      className="w-full !h-14"
                      type="number"
                      step="0.1"
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <div className="flex items-center gap-4 w-full ">
          <Button type="submit" className="  !h-14 bg-main-yellow">
            حفظ الدرجات وتقييم طالب اخر
          </Button>
          <Button type="submit" className="  !h-14 bg-main-red">
            إنهاء التقييم
          </Button>

          {/* الدرجة النهائية */}
          <div className="size-20 flex flex-col items-center justify-center rounded-full bg-secondary-green text-xs text-white font-bold ms-auto">
            <p >المجموع</p>
            <p >{total.toFixed(1)}</p>
          </div>
        </div>

      </form>
    </Form>
  )
}
