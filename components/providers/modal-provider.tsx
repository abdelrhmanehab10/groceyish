"use client";

import { FC, useEffect, useState } from "react";
import NewProductModal from "@/app/dashboard/_components/modals/new-product-modal";
import EditProductModal from "@/app/dashboard/_components/modals/edit-product-modal";
import NewCategoryModal from "@/app/dashboard/_components/modals/new-category-modal";

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NewProductModal />
      <EditProductModal />
      <NewCategoryModal />
    </>
  );
};

export default ModalProvider;
