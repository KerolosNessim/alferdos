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
import { useState, useMemo } from "react";
import { useProfileStore } from "@/stores/profileStore";

const studentSchema = z.object({
  status: z.string().optional(),
  religion: z.string().optional(),
  phone: z.string().optional(),
  code: z.string().optional(),
  nationalId: z.string().optional(),
  paymentDate: z.string().optional(),
  receiptNumber: z.string().optional(),
  fees: z.string().optional(),
  transfer: z.string().optional(),
  classNumber: z.string().optional(),
  parentPhone: z.string().optional(),
  parentJob: z.string().optional(),
  parentAddress: z.string().optional(),
  parentNationalId: z.string().optional(),
  paymentAmount: z.string().optional(),
});

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
  const { profileData } = useProfileStore();
  const [isEditable, setIsEditable] = useState(false);

  // 🧠 تحويل داتا الـ profileData لصيغة form
  const initialValues = useMemo(() => ({
    status: profileData?.personal_info?.status || "",
    religion: profileData?.personal_info?.religion || "",
    phone: profileData?.personal_info?.phone || "",
    code: profileData?.personal_info?.student_code || "",
    nationalId: profileData?.personal_info?.national_id || "",
    paymentDate: profileData?.academic_info?.payment_date || "",
    receiptNumber: profileData?.academic_info?.payment_receipt_number || "",
    fees: profileData?.academic_info?.school_fees?.toString() || "",
    transfer: profileData?.academic_info?.school_transfers || "",
    classNumber: profileData?.academic_info?.classroom_number?.toString() || "",
    parentPhone: profileData?.parent_info?.father_phone || "",
    parentJob: profileData?.parent_info?.father_job || "",
    parentAddress: profileData?.address_info?.guardian_address || "",
    parentNationalId: profileData?.parent_info?.father_national_id || "",
    paymentAmount: profileData?.academic_info?.payment_amount?.toString() || "",
  }), [profileData]);

  const form = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: initialValues,
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    console.log("بيانات محدثة:", values);
    // Call API هنا
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
                      {name === "phone" || name === "parentPhone" ? (
                        <div className="relative">
                          <p className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 border-r text-sm bg-transparent">
                            +20
                          </p>
                          <Input
                            {...field}
                            type={type}
                            disabled={!isEditable}
                            className={`h-12 shadow-md mt-1 pl-14 ${isEditable ? "bg-white" : "bg-bg-green"}`}
                          />
                        </div>
                      ) : (
                        <Input
                          {...field}
                          type={type}
                          disabled={!isEditable}
                          className={`h-12 shadow-md mt-1 ${isEditable ? "bg-white" : "bg-bg-green"}`}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}


        </div>

        {/* الأزرار */}
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
                  form.reset(initialValues);
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
