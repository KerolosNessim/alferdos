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
import { TbEyeClosed, TbEye } from "react-icons/tb";
import { useState } from "react"


const FormSchema = z.object({
  national_id: z.string().nonempty({ message: "الرقم القومي مطلوب" }),
  password: z.string().nonempty({ message: "الكود مطلوب" }),
})

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        national_id: "",
        password: "",
      },
    })
  
  function onSubmit(values) {
    console.log(values)
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"font-normal"}>الرقم السري</FormLabel>
              <FormControl>
                <div className="relative">
                  {showPassword ? (
                    <TbEye
                      size={20}
                      className="text-text-gray absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <TbEyeClosed
                      size={20}
                      className="text-text-gray absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(true)}
                    />
                  )}

                  <FormControl>
                    <Input
                      className="h-13 placeholder:text-xs shadow-md mt-1"
                      type={showPassword ? "text" : "password"}
                      placeholder="الرقم السري الخاص بك"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setPassword(e.target.value);
                      }}
                    />
                  </FormControl>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={"w-full bg-secondary-green h-13"}>تسجيل الدخول</Button>
        <div className="flex items-center justify-center text-xs gap-1">
          <p>ليس لديك حساب</p>
          <Link href={'/signup'} className="text-secondary-green hover:underline font-semibold"> تسجيل حساب</Link>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm
