"use client";

import { FC } from "react";
import Image from "next/image";
import { AiFillDelete, AiFillEdit, AiFillStar } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
interface DashboardProductCardProps {}

const DashboardProductCard: FC<DashboardProductCardProps> = ({}) => {
  return (
    <div className="w-fit mx-auto">
      <Image
        height={200}
        width={200}
        src="/best/best.png"
        alt="apple"
        className="mx-auto"
      />
      <p className="text-gray-400 text-xs">خضراوات</p>
      <h4 className="text-sm font-bold">محمر</h4>
      <span className="mt-1 flex items-center gap-1">
        <AiFillStar className="text-yellow-500 w-3 h-3" /> 5
      </span>
      <p className="text-xs font-thin">بواسطة احمد</p>
      <div className="px-1 mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <p className="text-emerald-500">$2</p>
          <p className="text-xs text-gray-500 line-through">$3.99</p>
        </div>
      </div>
      <div>
        <Progress value={30} />
        <p className="mt-1 text-xs">تم بيع: 20/50</p>
      </div>
      <div className="mt-5 md:flex items-center gap-2">
        <Button className="w-full bg-emerald-500 hover:bg-emerald-500/90">
          Edit
          <AiFillEdit className="mr-2" />
        </Button>
        <Button className="mt-1 md:mt-0 w-full bg-red-500 hover:bg-red-500/90">
          Delete
          <AiFillDelete className="mr-2" />
        </Button>
      </div>
    </div>
  );
};

export default DashboardProductCard;
