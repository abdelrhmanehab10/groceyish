import { FC } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { newProductSchema } from "@/types/zod";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { db } from "@/lib/db";
import { Category } from "@prisma/client";

interface NewProductFormProps {
  handleClose: () => void;
  form: UseFormReturn<z.infer<typeof newProductSchema>>;
  categories: Category[] | undefined;
}

const NewProductForm: FC<NewProductFormProps> = ({
  handleClose,
  form,
  categories,
}) => {
  const { user } = useUser();
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof newProductSchema>) {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>القسم</FormLabel>
              <FormControl>
                {categories && categories.length > 0 ? (
                  <Select onValueChange={(value) => field.onChange(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="القسم" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem value={category.id} key={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <p className="text-red-500 text-xs">
                    لا يوجد اقسام يجب ان تضيف عالاقل قسم واحد
                  </p>
                )}
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
              <FormDescription>صف المنتج بما لا يقل عن 40 حرف.</FormDescription>
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
                  <Input type="number" placeholder="ادخل السعر" {...field} />
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
                <FormLabel>الخصم</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="ادخل الخصم" {...field} />
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
                <Input
                  className="w-1/2"
                  type="number"
                  placeholder="ادخل الكميه"
                  {...field}
                />
              </FormControl>
              <FormDescription>ادخل الكميه المتاحه من المنتج.</FormDescription>
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
                <UploadImage value={field.value} onChange={field.onChange} />
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
  );
};

export default NewProductForm;
