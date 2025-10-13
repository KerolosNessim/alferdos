import React from 'react'
import * as motion from 'motion/react-client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { string, z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  month: z.string().nonempty("من فضلك اختر الشهر"),
  week: z.string().nonempty("من فضلك اختر الأسبوع"),
})
const ResultStep2 = ({ setStep , setMonth , setWeek }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      month: "",
      week: "",
    },
  })

  const months = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("ar-EG", { month: "long" })
  )

  const weeks = ["الأسبوع الأول", "الأسبوع الثاني", "الأسبوع الثالث", "الأسبوع الرابع"]

  function onSubmit(values) {
    setMonth(values.month)
    setWeek(values.week)
    setStep(3)
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 grid grid-cols-12 gap-4  mt-10">

          {/* الشهر */}
          <FormField
            control={form.control}
            name="month"
            render={({ field }) => (
              <FormItem className={"md:col-span-6 col-span-12 relative"}>
                <FormLabel>الشهر</FormLabel>
                <FormControl>
                  <Select dir="rtl" onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className={"w-full !h-14"}>
                      <SelectValue placeholder="اختر الشهر" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((m, idx) => (
                        <SelectItem key={m} value={String(idx)}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="absolute -bottom-6 start-0" />
              </FormItem>
            )}
          />

          {/* الأسبوع */}
          <FormField
            control={form.control}
            name="week"
            render={({ field }) => (
              <FormItem className={"md:col-span-6 col-span-12 relative  "}>
                <FormLabel>الأسبوع</FormLabel>
                <FormControl>
                  <Select dir="rtl" onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className={"w-full !h-14"}>
                      <SelectValue placeholder="اختر الأسبوع" />
                    </SelectTrigger>
                    <SelectContent>
                      {weeks.map((w, idx) => (
                        <SelectItem key={w} value={String(idx)}>
                          {w}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="absolute -bottom-6 start-0" />
              </FormItem>
            )}
          />
          <div className='col-span-12 '>
            <Button type="submit" className="w-fit px-12 h-14 bg-main-red mx-auto block">
              الخطوه التاليه
            </Button>
          </div>
        </form>
      </Form>

    </motion.div>
  )
}

export default ResultStep2
