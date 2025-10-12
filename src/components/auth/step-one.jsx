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
import { postData } from "@/lib/fetch-methods"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const FormSchema = z.object({
  national_id: z.string().nonempty({ message: "الرقم القومي مطلوب" }),
  code: z.string().nonempty({ message: "الكود مطلوب" }),
})
const StepOne = ({ setStep, setFirstToken }) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      national_id: "",
      code: "",
    },
  })

  const { formState: { isSubmitting } } = form
  async function onSubmit(values) {
    const res = await postData({
      url: '/registration/step1',
      data: values,
      isFormData: true,
    })
    if (res.code === 200) {
      setFirstToken(res?.data?.data?.token)
      setTimeout(() => {
        setStep(2)
      }, 1000);
    }
    else {
      toast.error("الرقم القومي او الكود غير صحيح")
    }
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
        <Button type="submit" className={"w-full bg-secondary-green h-13"} disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className=" h-4 w-4 animate-spin" /> : "التالي"}
        </Button>
        <div className="flex items-center justify-center text-xs gap-1">
          <p>لديك حساب بالفعل</p>
          <Link href={'/login'} className="text-secondary-green hover:underline font-semibold"> تسجيل الدخول</Link>
        </div>
      </form>
    </Form>
  )
}

export default StepOne
