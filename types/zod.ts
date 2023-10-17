import * as z from "zod";

export const heroEmailFormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "الاسم يجب ان يتكون من حرفيين علي الاقل",
    })
    .email({ message: "بريد الكتروني غير صالح" }),
});

export const newCategorySchema = z.object({
  name: z.string().min(2, {
    message: "الاسم يجب ان يتكون من حرفيين علي الاقل",
  }),
  imageUrl: z.string().min(1, { message: "الصوره مطلوبه" }),
});

export const newProductSchema = z.object({
  name: z.string().min(2, {
    message: "الاسم يجب ان يتكون من حرفيين علي الاقل",
  }),
  categoryId: z.string().min(2, {
    message: "الاسم يجب ان يتكون من حرفيين علي الاقل",
  }),
  description: z
    .string()
    .min(40, { message: "الوصف يجب ان يحتوي ع اكثر من 40 حرف علي الاقل" }),
  sale: z.string(),
  price: z.string().min(1, { message: "السعر مطلوب" }),
  imageUrl: z.string().min(1, { message: "الصوره مطلوبه" }),
  quantity: z.string().min(1, { message: "الكميه مطلوبه" }),
});
