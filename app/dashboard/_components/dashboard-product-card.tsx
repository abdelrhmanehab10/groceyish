"use client";

import { FC } from "react";
import Image from "next/image";
import { AiFillDelete, AiFillEdit, AiFillStar } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Product } from "@prisma/client";

interface DashboardProductCardProps {
  product: Product;
}

const DashboardProductCard: FC<DashboardProductCardProps> = ({ product }) => {
  return (
    <div className="w-fit mx-auto">
      <Image
        height={150}
        width={150}
        src={product.imageUrl}
        alt="apple"
        className="mx-auto rounded mb-2"
      />
      <p className="text-gray-400 text-xs">خضراوات</p>
      <h4 className="text-sm font-bold">{product.name}</h4>
      <span className="mt-1 flex items-center justify-center gap-1">
        <AiFillStar className="text-yellow-500 w-3 h-3" /> 5
      </span>
      <p className="text-xs font-thin">بواسطة {product.ownerName}</p>
      <div className="px-1 mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <p className="text-emerald-500">
            {product.price} <span className="text-sm">ج</span>
          </p>
          <p className="text-xs text-gray-500 line-through">$3.99</p>
        </div>
      </div>
      <div>
        <Progress value={30} />
        <p className="mt-1 text-xs">تم بيع: 20/{product.quantity}</p>
      </div>
      <div className="mt-5 md:flex items-center gap-2">
        <Button className="w-full bg-emerald-500 hover:bg-emerald-500/90">
          التعديل
          <AiFillEdit className="mr-2" />
        </Button>
        <Button className="mt-1 md:mt-0 w-full bg-red-500 hover:bg-red-500/90">
          الحذف
          <AiFillDelete className="mr-2" />
        </Button>
      </div>
    </div>
  );
};

export default DashboardProductCard;
