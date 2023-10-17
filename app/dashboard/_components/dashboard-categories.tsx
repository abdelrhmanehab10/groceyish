import { FC } from "react";
import CategoryCard from "@/components/category-card";
import { db } from "@/lib/db";

interface DashboardCategoriesProps {}

const DashboardCategories: FC<DashboardCategoriesProps> = async ({}) => {
  const categories = await db.category.findMany();

  return categories.length > 0 ? (
    <div className="py-5 grid grid-cols-2 md:grid-cols-5">
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  ) : (
    <div className="h-20 flex justify-center items-center">
      <p>لا توجد اقسام..</p>
    </div>
  );
};

export default DashboardCategories;
