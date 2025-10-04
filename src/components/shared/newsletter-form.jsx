"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
  email: z.string().email({ message: "البريد الالكتروني غير صحيح" }),
})


const NewsLetter = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })
  function onSubmit() {

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className={"relative"}>
              <FormControl>
                <Input placeholder="البريد الالكتروني" {...field} className={"h-14 bg-white  placeholder:p-2 placeholder:text-xs"} />
              </FormControl>

              <FormMessage className={"absolute top-[120%] "} />
              <Button type="submit" className={"absolute w-fit bg-main-red h-11 top-1/2 -translate-y-1/2 left-2"}>إشتراك</Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default NewsLetter
