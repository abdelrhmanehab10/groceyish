import { FC } from "react";
import DashboardProducts from "./_components/dashboard-products";
import DashboardCategories from "./_components/dashboard-categories";
import DashboardSectionHeader from "./_components/dashboard-section-header";
import { db } from "@/lib/db";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = async ({}) => {
  const categories = await db.category.findMany();
  return (
    <div className="h-full text-center p-3">
      <div className="flex justify-between items-center">
        <DashboardSectionHeader header="كل الأقسام" model="newCategory" />
      </div>
      <DashboardCategories />
      <div className="flex justify-between items-center">
        <DashboardSectionHeader
          header="كل المنتجات"
          model="newProduct"
          categories={categories}
        />
      </div>
      <DashboardProducts />
    </div>
  );
};

export default Dashboard;
