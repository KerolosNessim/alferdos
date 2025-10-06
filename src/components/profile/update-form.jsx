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
import { useForm } from "react-hook-form"
import { z } from "zod"
import { TbEyeClosed, TbEye, TbEdit } from "react-icons/tb";
import { useState } from "react"

const FormSchema = z.object({
  national_id: z.string().nonempty({ message: "الرقم القومي مطلوب" }),
  code: z.string().nonempty({ message: "الكود مطلوب" }),
  phone: z.string().nonempty({ message: "رقم الهاتف مطلوب" }),
  password: z.string().nonempty({ message: "الرقم السري مطلوب" }),
})

const UpdateForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isEditable, setIsEditable] = useState(false); // 🔹 حالة التحكم في التعديل

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      national_id: "65657788990001",
      code: "1515A",
      phone: "01278654123",
      password: "12345678",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:w-2/3 space-y-8">

        {/* الرقم القومي */}
        <FormField
          control={form.control}
          name="national_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal">الرقم القومي</FormLabel>
              <FormControl>
                <Input
                  className={`h-13 placeholder:text-xs shadow-md mt-1 ${isEditable ? "bg-white" : "bg-bg-green"}`}
                  type="number"
                  placeholder="الرقم القومي الخاص بك"
                  disabled={!isEditable}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* الكود */}
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal">الكود</FormLabel>
              <FormControl>
                <Input
                  className={`h-13 placeholder:text-xs shadow-md mt-1 ${isEditable ? "bg-white" : "bg-bg-green"}`}
                  type="text"
                  placeholder="الكود الخاص بك"
                  disabled={!isEditable}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* رقم الهاتف */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal">رقم الهاتف</FormLabel>
              <div className="relative">
                <p className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 border-r text-sm">
                  +20
                </p>
                <FormControl>
                  <Input
                    className={`h-13 placeholder:text-xs shadow-md mt-1 pl-14 ${isEditable ? "bg-white" : "bg-bg-green"}`}
                    type="tel"
                    disabled={!isEditable}
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* الرقم السري */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal">الرقم السري</FormLabel>
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
                  <Input
                    className={`h-13 placeholder:text-xs shadow-md mt-1 ${isEditable ? "bg-white" : "bg-bg-green"}`}
                    type={showPassword ? "text" : "password"}
                    placeholder="الرقم السري الخاص بك"
                    disabled={!isEditable}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* زر التعديل / الحفظ */}
        <div className="flex gap-3">
          {isEditable ? (
            <>
              <Button type="submit" className="bg-secondary-green h-12">
                حفظ التعديلات
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12"
                onClick={() => setIsEditable(false)}
              >
                إلغاء
              </Button>
            </>
          ) : (
            <Button
              type="button"
              className="bg-secondary-green h-12"
              onClick={() => setIsEditable(true)}
            >
              <TbEdit size={20} className="mr-2" /> تعديل
            </Button>
          )}
        </div>

      </form>
    </Form>
  );
};

export default UpdateForm;
