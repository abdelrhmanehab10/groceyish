import { FC } from "react";
import { db } from "@/lib/db";
import DashboardProductCard from "./dashboard-product-card";

interface DashboardProductsProps {}

const DashboardProducts: FC<DashboardProductsProps> = async ({}) => {
  const products = await db.product.findMany();

  return products?.length > 0 ? (
    <div className="py-5 grid grid-cols-2 md:grid-cols-5">
      {products.map((product) => (
        <DashboardProductCard key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <div className="h-20 flex justify-center items-center">
      <p>لا توجد منتجات..</p>
    </div>
  );
};

export default DashboardProducts;
