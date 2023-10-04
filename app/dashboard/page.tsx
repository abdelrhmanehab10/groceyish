import { Button } from "@/components/ui/button";
import { FC } from "react";
import BestSellCard from "../(main)/_components/best-sell/best-sell-card";
import DashboardProductCard from "./_components/dashboard-product-card";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  return (
    <div className="text-center p-3">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">كل المنتجات</h2>
        <Button className="bg-emerald-500 text-white shadow-black/40">
          منتج جديد
        </Button>
      </div>
      <div className="py-5 grid grid-cols-2 md:grid-cols-5">
        <DashboardProductCard />
      </div>
    </div>
  );
};

export default Dashboard;
