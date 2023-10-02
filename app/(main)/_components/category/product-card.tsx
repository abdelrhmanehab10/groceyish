import Image from "next/image";
import { FC } from "react";

interface CategoryProductCardProps {}

const CategoryProductCard: FC<CategoryProductCardProps> = ({}) => {
  return (
    <div className="cursor-pointer bg-[#FEEFEA] transition hover:bg-white text-center">
      <Image
        height={60}
        width={60}
        src="/category/apple.png"
        className="mx-auto"
        alt="apple"
      />
      <h4 className="text-sm">تفاح</h4>
      <p className="text-[10px] text-gray-400">60 قطعة</p>
    </div>
  );
};

export default CategoryProductCard;
