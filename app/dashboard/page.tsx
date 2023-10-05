import { FC } from "react";
import DashboardProducts from "./_components/dashboard-products";
import AddNewProductButton from "./_components/add-new-product-button";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <div className="h-full text-center p-3">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">كل المنتجات</h2>
        <AddNewProductButton />
      </div>
      <DashboardProducts />
    </div>
  );
};

export default Dashboard;
