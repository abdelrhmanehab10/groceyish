import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { useForm } from "react-hook-form";
import { newProductSchema } from "@/types/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import NewProductForm from "../forms/new-product-form";
import * as z from "zod";
import { db } from "@/lib/db";

interface NewProductModalProps {}

const NewProductModal: FC<NewProductModalProps> = ({}) => {
  const { isOpen, onClose, type, data } = useModal();
  const isModalOpen = isOpen && type === "newProduct";

  const form = useForm<z.infer<typeof newProductSchema>>({
    resolver: zodResolver(newProductSchema),
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

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>اضافة منتج جديد</DialogTitle>
          <DialogDescription>
            يمكنك اضافة منتج جديد من خلال ملئ البيانات الأتيه..
          </DialogDescription>
        </DialogHeader>
        <NewProductForm
          form={form}
          handleClose={handleClose}
          categories={data?.categories}
        />
      </DialogContent>
    </Dialog>
  );
};

export default NewProductModal;
