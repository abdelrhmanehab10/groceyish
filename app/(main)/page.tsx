import { db } from "@/lib/db";
import AdsSpace from "./_components/ads-space";
import BestSellSection from "./_components/best-sell/best-sell-section";
import CategoryProductCard from "./_components/category/category-card";
import Hero from "./_components/hero";
import ListItems from "./_components/list-items/list-items";
import Offer from "./_components/offer";
import ProductCard from "./_components/product/product";
import CategorySection from "./_components/category/category-section";

export default async function Home() {
  const products = await db.product.findMany();
  return (
    <>
      <Hero />
      <div className="px-3 mt-5 flex flex-col gap-2 md:mx-20">
        <CategorySection header="اكتشف الفئات" />
        {/* <Section header="منتجات مميزة" component={<ProductCard />} /> */}
        <Offer />
        <BestSellSection />
        <ListItems />
        <AdsSpace />
      </div>
    </>
  );
}
