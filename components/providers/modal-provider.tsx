"use client";

import { FC, useEffect, useState } from "react";
import NewProductModal from "@/app/dashboard/_components/modals/new-product";

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
    </>
  );
};

export default ModalProvider;
