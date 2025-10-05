"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
  national_id: z.string().nonempty({ message: "الرقم القومي مطلوب" }),
  code: z.string().nonempty({ message: "الكود مطلوب" }),
})
const StepOne = ({ setStep }) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      national_id: "",
      code: "",
    },
  })

  function onSubmit(values) {
    setStep(2)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <FormField
          control={form.control}
          name="national_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"font-normal"}>الرقم القومي</FormLabel>
              <FormControl>
                <Input className={"h-13 placeholder:text-xs shadow-md mt-1"} type="number" placeholder="الرقم القومي الخاص بك"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"font-normal"}>الكود</FormLabel>
              <FormControl>
                <Input className={"h-13 placeholder:text-xs shadow-md mt-1"} type="number" placeholder="الكود الخاص بك"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={"w-full bg-secondary-green h-13"}>التالي</Button>
        <div className="text-center text-xs space-y-1">
          <p>بتسجيلك فإنك توافق علي</p>
          <Link href={'/terms'} className="text-secondary-green hover:underline font-semibold"> شروط الإستخدام وسياسة الخصوصية</Link>
        </div>
      </form>
    </Form>
  )
}

export default StepOne
