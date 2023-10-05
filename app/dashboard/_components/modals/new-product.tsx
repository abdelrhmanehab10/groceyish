"use client";

import { FC } from "react";
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
import { UploadDropzone } from "@/lib/utils";
import "@uploadthing/react/styles.css";
import UploadImage from "../upload-image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "الاسم يجب ان يتكون من حرفيين علي الاقل",
  }),
  description: z
    .string()
    .min(40, { message: "الوصف يجب ان يحتوي ع اكثر من 40 حرف علي الاقل" }),
  price: z.string().min(1, { message: "السعر مطلوب" }),
  imageUrl: z.string().min(1, { message: "الصوره مطلوبه" }),
  quantity: z.string().min(1, { message: "الكميه مطلوبه" }),
});

interface NewProductModalProps {}

const NewProductModal: FC<NewProductModalProps> = ({}) => {
  const { user } = useUser();
  const { isOpen, onClose, type } = useModal();
  const router = useRouter();
  const isModalOpen = isOpen && type === "newProduct";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      imageUrl: "",
      quantity: "",
    },
  });

  const handleClose = () => {
    form.reset();
    onClose();
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.post("/api/product", {
        ...values,
        ownerName: user?.fullName,
        ownerId: user?.id,
      });
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
          <DialogTitle>اضافة منتج جديد</DialogTitle>
          <DialogDescription>
            يمكنك اضافة منتج جديد من خلال ملئ البيانات الأتيه..
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
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الكميه</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="ادخل الكميه"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      ادخل الكميه المتاحه من المنتج.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <UploadImage onChange={field.onChange} />
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

export default NewProductModal;
