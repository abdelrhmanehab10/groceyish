"use client";

import { FC, useState } from "react";
import Image from "next/image";
import {
  AiFillDelete,
  AiFillEdit,
  AiFillStar,
  AiOutlineLoading,
} from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Product } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";

interface DashboardProductCardProps {
  product: Product;
}

const DashboardProductCard: FC<DashboardProductCardProps> = ({ product }) => {
  const { onOpen } = useModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const deleteProduct = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/product/${product.id}`);
      setIsLoading(false);
      router.refresh();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="w-fit mx-auto">
      <Image
        height={150}
        width={150}
        src={product.imageUrl}
        alt="apple"
        className="mx-auto rounded mb-2"
      />
      <p className="text-gray-400 text-xs">{product.categoryName}</p>
      <h4 className="text-sm font-bold">{product.name}</h4>
      <span className="mt-1 flex items-center justify-center gap-1">
        <AiFillStar className="text-yellow-500 w-3 h-3" /> 5
      </span>
      <p className="text-xs font-thin">بواسطة {product.ownerName}</p>
      <div className="px-1 mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1 mb-1">
          <p className="text-emerald-500">
            {product.price} <span className="text-sm">ج</span>
          </p>
          {product.sale ? (
            <p className="text-emerald-500">
              {product.sale} <span className="text-sm">ج</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <Progress value={0} />
        <p className="mt-1 text-xs">تم بيع: 0/{product.quantity}</p>
      </div>
      <div className="mt-5 md:flex items-center gap-2">
        <Button
          onClick={() => {
            onOpen("editProduct", { product });
          }}
          className="w-full bg-emerald-500 hover:bg-emerald-500/90"
        >
          التعديل
          <AiFillEdit className="mr-2" />
        </Button>
        <Button
          onClick={deleteProduct}
          className="mt-1 md:mt-0 w-full bg-red-500 hover:bg-red-500/90"
        >
          {isLoading ? <AiOutlineLoading className="animate-spin" /> : "الحذف"}
          <AiFillDelete className="mr-2" />
        </Button>
      </div>
    </div>
  );
};

export default DashboardProductCard;
