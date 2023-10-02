import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { FC } from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";

interface BestSellCardProps {}

const BestSellCard: FC<BestSellCardProps> = ({}) => {
  return (
    <div className="w-fit mx-auto">
      <div className="relative">
        <Image
          height={200}
          width={200}
          src="/best/best.png"
          alt="apple"
          className="mx-auto"
        />
        <p className="absolute top-3 right-3 bg-yellow-400/80 px-2 rounded text-sm">
          وفر 10%
        </p>
      </div>
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
        <p className="mt-1">تم بيع: 20/50</p>
      </div>
      <Button className="mt-5 w-full bg-emerald-500 hover:bg-emerald-500/90">
        Add to cart
        <AiOutlineShoppingCart className="mr-2" />
      </Button>
    </div>
  );
};

export default BestSellCard;
