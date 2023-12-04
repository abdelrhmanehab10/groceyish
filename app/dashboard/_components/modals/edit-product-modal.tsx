"use client";

import { FC, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import "@uploadthing/react/styles.css";
import UploadImage from "../upload-image";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "الاسم يجب ان يتكون من حرفيين علي الاقل",
  }),
  category: z.string().min(2, {
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

interface EditProductModalProps {}

const EditProductModal: FC<EditProductModalProps> = ({}) => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const isModalOpen = isOpen && type === "editProduct";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
      price: "",
      sale: "",
      imageUrl: "",
      quantity: "",
    },
  });

  useEffect(() => {
    if (data?.product) {
      form.setValue("name", data?.product.name);
      form.setValue("category", data?.product.categoryName);
      form.setValue("description", data?.product.description);
      form.setValue("imageUrl", data?.product.imageUrl);
      form.setValue("quantity", data?.product.quantity);
      form.setValue("price", data?.product.price);
      form.setValue("sale", data?.product.sale ?? "");
    }
  }, [form, data?.product]);

  const handleClose = () => {
    form.reset();
    onClose();
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.post(`/api/product/${data?.product?.id}`, values);
      handleClose();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>تعديل المنتج </DialogTitle>
          <DialogDescription>
            يمكنك تعديل المنتج من خلال ملئ البيانات الأتيه..
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الاسم</FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل اسم المنتج" {...field} />
                  </FormControl>
                  <FormDescription>اسم المنتج بالكامل.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>القسم</FormLabel>
                  <FormControl>
                    <Select onValueChange={(e) => field.onChange(e)}>
                      <SelectTrigger>
                        <SelectValue placeholder="القسم" />
                      </SelectTrigger>
                      <SelectContent></SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>قسم المنتج.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الوصف</FormLabel>
                  <FormControl>
                    <Textarea placeholder="اوصف المنتج" {...field} />
                  </FormControl>
                  <FormDescription>
                    صف المنتج بما لا يقل عن 40 حرف.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>السعر</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="ادخل السعر"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>سعر المنتج.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sale"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الكميه</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="ادخل الخصم"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>ادخل الخصم اذا تواجد </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الكميه</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="ادخل الكميه" {...field} />
                  </FormControl>
                  <FormDescription>
                    ادخل الكميه المتاحه من المنتج.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <UploadImage
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="bg-emerald-500 text-white w-full" type="submit">
              ادخال
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductModal;
