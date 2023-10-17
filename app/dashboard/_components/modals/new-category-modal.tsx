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
import { newCategorySchema } from "@/types/zod";
import NewCategoryForm from "../forms/new-category-form";

interface NewCategoryModalProps {}

const NewCategoryModal: FC<NewCategoryModalProps> = ({}) => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "newCategory";

  const form = useForm<z.infer<typeof newCategorySchema>>({
    resolver: zodResolver(newCategorySchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  const closeModal = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>اضافة قسم جديد</DialogTitle>
          <DialogDescription>
            يمكنك اضافة قسم جديد من خلال ملئ البيانات الأتيه..
          </DialogDescription>
        </DialogHeader>
        <NewCategoryForm form={form} closeModal={closeModal} />
      </DialogContent>
    </Dialog>
  );
};

export default NewCategoryModal;
