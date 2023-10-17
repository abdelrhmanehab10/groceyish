import { Category } from "@prisma/client";
import Image from "next/image";
import { FC } from "react";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="cursor-pointer bg-[#FEEFEA] transition hover:bg-white text-center p-3">
      <Image
        height={60}
        width={60}
        src={category.imageUrl}
        className="mx-auto"
        alt="apple"
      />
      <h4 className="text-sm">{category.name}</h4>
    </div>
  );
};

export default CategoryCard;
