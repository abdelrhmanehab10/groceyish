"use client";
import { Button } from "@/components/ui/button";
import { ModalType, useModal } from "@/hooks/use-modal-store";
import { Category } from "@prisma/client";
import { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";

interface DashboardSectionHeaderProps {
  header: string;
  model: ModalType;
  categories?: Category[];
}

const DashboardSectionHeader: FC<DashboardSectionHeaderProps> = ({
  header,
  model,
  categories,
}) => {
  const { onOpen } = useModal();

  return (
    <>
      <h2 className="font-bold text-xl">{header}</h2>
      <Button
        onClick={() => onOpen(model, { categories })}
        className="bg-emerald-500 hover:bg-emerald-500/80 text-white shadow-black/40"
      >
        <AiOutlinePlus />
      </Button>
    </>
  );
};

export default DashboardSectionHeader;
