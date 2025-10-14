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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TbEyeClosed, TbEye, TbEdit } from "react-icons/tb";
import { useState } from "react";

const studentSchema = z.object({
  status: z.string().nonempty("حالة القيد مطلوبة"),
  religion: z.string().nonempty("الديانة مطلوبة"),
  phone: z.string().nonempty("رقم الهاتف مطلوب"),
  code: z.string().nonempty("الكود مطلوب"),
  nationalId: z.string().nonempty("الرقم القومي مطلوب"),
  paymentDate: z.string().nonempty("تاريخ السداد مطلوب"),
  receiptNumber: z.string().nonempty("رقم القسيمة مطلوب"),
  fees: z.string().nonempty("الرسوم المدرسية مطلوبة"),
  transfer: z.string().nonempty("بيان التحويلات مطلوب"),
  classNumber: z.string().nonempty("رقم الفصل مطلوب"),
  parentPhone: z.string().nonempty("رقم هاتف ولي الأمر مطلوب"),
  parentJob: z.string().nonempty("عمل ولي الأمر مطلوب"),
  parentAddress: z.string().nonempty("عنوان ولي الأمر مطلوب"),
  parentNationalId: z.string().nonempty("الرقم القومي لولي الأمر مطلوب"),
  paymentAmount: z.string().nonempty("مبلغ السداد مطلوب"),
  password: z.string().nonempty("الرقم السري مطلوب"),
});

const defaultValues = {
  status: "مقيد",
  religion: "مسلم",
  phone: "01034678890",
  code: "234455",
  nationalId: "045543342221",
  paymentDate: "17/2/2025",
  receiptNumber: "34435",
  fees: "712 م",
  transfer: "لا يوجد",
  classNumber: "4",
  parentPhone: "01034678890",
  parentJob: "مدير بنك البركة",
  parentAddress: "اسم المبني، الشارع، المدينة",
  parentNationalId: "045543342221",
  paymentAmount: "500 م",
  password: "",
};

const fields = [
  { name: "status", label: "حالة القيد", type: "text" },
  { name: "religion", label: "الديانة", type: "text" },
  { name: "phone", label: "رقم الهاتف", type: "tel" },
  { name: "code", label: "الكود", type: "text" },
  { name: "nationalId", label: "الرقم القومي", type: "text" },
  { name: "paymentDate", label: "تاريخ السداد", type: "text" },
  { name: "receiptNumber", label: "رقم قسيمة سداد المصروفات", type: "text" },
  { name: "fees", label: "الرسوم المدرسية", type: "text" },
  { name: "transfer", label: "التحويلات المدرسية", type: "text" },
  { name: "classNumber", label: "رقم الفصل", type: "text" },
  { name: "parentPhone", label: "رقم هاتف ولي الأمر", type: "tel" },
  { name: "parentJob", label: "عمل ولي الأمر", type: "text" },
  { name: "parentAddress", label: "عنوان ولي الأمر", type: "text" },
  { name: "parentNationalId", label: "الرقم القومي لولي الأمر", type: "text" },
  { name: "paymentAmount", label: "مبلغ السداد", type: "text" },
];

const UpdateForm = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues,
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    console.log("بيانات الطالب:", values);
    // هنا ممكن تعمل call للـ API لعمل تحديث البيانات
    setIsEditable(false);
    setShowPassword(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="flex flex-wrap gap-4">
          {fields.map(({ name, label, type }) => (
            <div key={name} className="w-full md:w-[48%]">
              <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">{label}</FormLabel>
                    <FormControl>
                      {/* خاص بالـ phone لو حابب تحافظ على البادئة */}
                      {name === "phone" || name === "parentPhone" ? (
                        <div className="relative">
                          <p className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 border-r text-sm bg-transparent">
                            +20
                          </p>
                          <Input
                            {...field}
                            type={type}
                            disabled={!isEditable}
                            className={`h-12 shadow-md mt-1 pl-14 ${isEditable ? "bg-white" : "bg-bg-green"
                              }`}
                          />
                        </div>
                      ) : (
                        <Input
                          {...field}
                          type={type}
                          disabled={!isEditable}
                          className={`h-12 shadow-md mt-1 ${isEditable ? "bg-white" : "bg-bg-green"
                            }`}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}

          {/* حقل الرقم السري منفصل عشان نضيف أيقونة show/hide بداخل الحقل */}
          <div className="w-full md:w-[48%]">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">الرقم السري</FormLabel>
                  <FormControl>
                    <div className="relative">
                      {/* أيقونة سوداء داخل الحقل على الجهة اليسرى (RTL) */}
                      {showPassword ? (
                        <TbEye
                          role="button"
                          aria-label="اخفاء الرقم السري"
                          size={18}
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer text-black"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <TbEyeClosed
                          role="button"
                          aria-label="عرض الرقم السري"
                          size={18}
                          className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer text-black"
                          onClick={() => setShowPassword(true)}
                        />
                      )}

                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        disabled={!isEditable}
                        placeholder="الرقم السري الخاص بك"
                        className={`h-12 shadow-md mt-1 pl-11 ${isEditable ? "bg-white" : "bg-bg-green"
                          }`}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* أزرار التحكم */}
        <div className="flex gap-3 pt-4">
          {isEditable ? (
            <>
              <Button type="submit" className="bg-secondary-green h-12">
                حفظ التعديلات
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12"
                onClick={() => {
                  form.reset(defaultValues);
                  setIsEditable(false);
                  setShowPassword(false);
                }}
              >
                إلغاء
              </Button>
            </>
          ) : (
            <Button
              type="button"
              className="bg-secondary-green h-12 flex items-center gap-2"
              onClick={() => setIsEditable(true)}
            >
              <TbEdit size={18} /> تعديل البيانات
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};

export default UpdateForm;
