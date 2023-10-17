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
import UploadImage from "../upload-image";
import "@uploadthing/react/styles.css";
import { useRouter } from "next/navigation";
import { newCategorySchema } from "@/types/zod";
import axios from "axios";
import * as z from "zod";
import { UseFormReturn } from "react-hook-form";

type Form = UseFormReturn<
  {
    name: string;
    imageUrl: string;
  },
  any,
  undefined
>;

interface NewCategoryFormProps {
  form: Form;
  closeModal: () => void;
}

const NewCategoryForm: FC<NewCategoryFormProps> = ({ form, closeModal }) => {
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof newCategorySchema>) {
    console.log(values);

    try {
      await axios.post("/api/category", values);
      closeModal();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الاسم</FormLabel>
              <FormControl>
                <Input placeholder="ادخل اسم القسم" {...field} />
              </FormControl>
              <FormDescription>اسم القسم بالكامل.</FormDescription>
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

export default NewCategoryForm;
