"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";

interface AddNewProductButtonProps {}

const AddNewProductButton: FC<AddNewProductButtonProps> = ({}) => {
  const { onOpen } = useModal();
  return (
    <Button
      onClick={() => onOpen("newProduct")}
      className="bg-emerald-500 hover:bg-emerald-500/80 text-white shadow-black/40"
    >
      منتج جديد
    </Button>
  );
};

export default AddNewProductButton;
