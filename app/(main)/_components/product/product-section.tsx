import { FC } from "react";
import CategoryProductCard from "../category/category-card";
import Categories from "@/components/categories";
import { db } from "@/lib/db";
import ProductCard from "./product";

interface ProductSectionProps {
  header: string;
}

const ProductSection: FC<ProductSectionProps> = async ({ header }) => {
  const products = await db.product.findMany();
  return (
    <>
      <Categories header={header} />
      <div className="py-4">
        <ProductCard products={products} />
      </div>
      ;
    </>
  );
};

export default ProductSection;
