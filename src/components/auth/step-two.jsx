// "use client"
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { zodResolver } from "@hookform/resolvers/zod"
// import Link from "next/link"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { TbEyeClosed } from "react-icons/tb";
// import { TbEye } from "react-icons/tb";

// import { useState } from "react"

// const FormSchema = z.object({
//   phone: z.string().nonempty({ message: "رقم الهاتف مطلوب" }),
//   password: z.string().nonempty({ message: "الرقم السري مطلوب" }),
//   confirm_password: z.string().nonempty({ message: "تاكيد الرقم السري مطلوب" }),
// }).refine((data) => data.password === data.confirm_password, {
//   message: "الرقم السري غير متطابق",
//   path: ["confirm_password"],
// })
// const StepTwo = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const form = useForm({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       phone: "",
//       password: "",
//       confirm_password: "",
//     },
//   })

//   function onSubmit(values) {
//   }
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
//         <FormField
//           control={form.control}
//           name="phone"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className={"font-normal"}>رقم الهاتف</FormLabel>
//               <div className="relative">
//                 <p className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 border-r text-sm ">+20</p>
//                 <FormControl>
//                   <Input className={"h-13 placeholder:text-xs shadow-md mt-1 pl-14"} type="tel"   {...field} />
//                 </FormControl>
//               </div>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className={"font-normal"}>الرقم السري</FormLabel>
//               <div className="relative">
//                 <div className="relative">
//                   {showPassword ? (
//                     <TbEye
//                       size={20}
//                       className="text-text-gray absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
//                       onClick={() => setShowPassword(false)}
//                     />
//                   ) : (
//                       <TbEyeClosed
//                       size={20}
//                       className="text-text-gray absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
//                       onClick={() => setShowPassword(true)}
//                     />
//                   )}

//                   <FormControl>
//                     <Input className={"h-13 placeholder:text-xs shadow-md mt-1"} type={showPassword ? "text" : "password"} placeholder="الرقم السري الخاص بك"  {...field} />
//                   </FormControl>
//                 </div>
//               </div>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="confirm_password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className={"font-normal"}> تاكيد الرقم السري</FormLabel>
//               <div className="relative">
//                 {showConfirmPassword ? (
//                   <TbEye
//                     size={20}
//                     className="text-text-gray absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
//                     onClick={() => setShowConfirmPassword(false)}
//                   />
//                 ) : (
//                   <TbEyeClosed
//                     size={20}
//                     className="text-text-gray absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
//                     onClick={() => setShowConfirmPassword(true)}
//                   />
//                 )}

//                 <FormControl>
//                   <Input className={"h-13 placeholder:text-xs shadow-md mt-1"} type={showConfirmPassword ? "text" : "password"} placeholder=" تاكيدالرقم السري الخاص بك"  {...field} />
//                 </FormControl>
//               </div>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit" className={"w-full bg-secondary-green h-13"}>تسجيل الدخول</Button>
//         <div className="text-center text-xs space-y-1">
//           <p>بتسجيلك فإنك توافق علي</p>
//           <Link href={'/terms'} className="text-secondary-green hover:underline font-semibold"> شروط الإستخدام وسياسة الخصوصية</Link>
//         </div>
//       </form>
//     </Form>
//   )
// }

// export default StepTwo

"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TbEyeClosed, TbEye } from "react-icons/tb";
import { useState, useEffect } from "react";
import { Check, Loader2, X } from "lucide-react";
import { postData } from "@/lib/fetch-methods";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const FormSchema = z
  .object({
    phone: z.string().nonempty({ message: "رقم الهاتف مطلوب" }),
    password: z.string().nonempty({ message: "الرقم السري مطلوب" }),
    confirm_password: z
      .string()
      .nonempty({ message: "تأكيد الرقم السري مطلوب" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "الرقم السري غير متطابق",
    path: ["confirm_password"],
  });

export default function StepTwo({ firstToken }) {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");

  const [checks, setChecks] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      password: "",
      confirm_password: "",
    },
  });
const { isSubmitting } = form.formState
  useEffect(() => {
    setChecks({
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  async function onSubmit(values) {
    const res = await postData({
      url: "/registration/step2",
      data: values,
      token: firstToken,
      isFormData: true,
    });
    if (res.code == 200) {
      toast.success("تم التسجيل بنجاح")
      router.push("/login")
    }else{
      toast.error("حدث خطأ حاول مرة اخري")
      router.refresh()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
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
                    className="h-13 placeholder:text-xs shadow-md mt-1 pl-14"
                    type="tel"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* كلمة المرور */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal">كلمة المرور</FormLabel>
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
              <FormMessage />

            </FormItem>
          )}
        />

        {/* تأكيد كلمة المرور */}
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal">تأكيد كلمة المرور</FormLabel>
              <div className="relative">
                {showConfirmPassword ? (
                  <TbEye
                    size={20}
                    className="text-text-gray absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <TbEyeClosed
                    size={20}
                    className="text-text-gray absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
                <FormControl>
                  <Input
                    className="h-13 placeholder:text-xs shadow-md mt-1"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="تأكيد الرقم السري الخاص بك"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ✅ تحقق من الشروط */}
        <div className="mt-2 space-y-1 text-xs">
          <PasswordCheck label="تحتوي على 8 أحرف أو أكثر" ok={checks.length} />
          <PasswordCheck label="تحتوي على حرف كبير" ok={checks.upper} />
          <PasswordCheck label="تحتوي على حرف صغير" ok={checks.lower} />
          <PasswordCheck label="تحتوي على رقم" ok={checks.number} />
          <PasswordCheck label="تحتوي على رمز خاص" ok={checks.special} />
        </div>
        <Button disabled={isSubmitting} type="submit" className="w-full bg-secondary-green h-13">
          {isSubmitting ? <Loader2 className=" h-4 w-4 animate-spin" /> : "إنشاء حساب"}
        </Button>


        <div className="flex items-center justify-center text-xs gap-1">
          <p>لديك حساب بالفعل</p>
          <Link href={'/login'} className="text-secondary-green hover:underline font-semibold"> تسجيل الدخول</Link>
        </div>
      </form>
    </Form>
  );
}

/* ✅ مكون صغير لعرض شرط الباسورد */
function PasswordCheck({ label, ok }) {
  return (
    <p
      className={`flex items-center gap-1 ${ok ? "text-secondary-green" : "text-gray-400"
        }`}
    >
      {ok ? <Check size={14} /> : <X size={14} />}
      {label}
    </p>
  );
}

