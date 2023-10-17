import { FC } from "react";
import CategoryProductCard from "@/components/category-card";
import Categories from "@/components/categories";
import { db } from "@/lib/db";

interface CategorySectionProps {
  header: string;
}

const CategorySection: FC<CategorySectionProps> = async ({ header }) => {
  const categories = await db.category.findMany();
  return (
    <>
      <Categories header={header} />
      <div className="py-4">
        {categories.map((category) => (
          <CategoryProductCard key={category.id} category={category} />
        ))}
      </div>
      ;
    </>
  );
};

export default CategorySection;
