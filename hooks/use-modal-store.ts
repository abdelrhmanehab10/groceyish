import { Category, Product } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "newProduct" | "editProduct" | "newCategory";
type DataType = {
  product?: Product;
  categories?: Category[];
} | null;

interface ModalStore {
  type: ModalType | null;
  data?: DataType;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: DataType) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: null,
  isOpen: false,
  onOpen: (type, data) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
