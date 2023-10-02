import { FC } from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = ({}) => {
  return (
    <div className="cursor-pointer bg-[#FEEFEA] transition hover:bg-white">
      <Image height={200} width={200} src="/product/redish.png" alt="apple" />
      <p className="text-gray-400 text-xs">خضراوات</p>
      <h4 className="text-sm font-bold">محمر</h4>
      <span className="mt-1 flex items-center gap-1">
        <AiFillStar className="text-yellow-500 w-3 h-3" /> 5
      </span>
      <p className="text-xs font-thin">بواسطة احمد</p>
      <div className="px-1 mt-3 flex items-center justify-between">
        <div className="flex items-center text-xs gap-1">
          <p className="text-emerald-500">$2</p>
          <p className="text-gray-500 line-through">$3.99</p>
        </div>
        <button className="text-xs text-emerald-500 flex gap-1 items-center">
          <AiOutlineShoppingCart className="w-3 h-3" /> Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
