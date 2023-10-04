import AdsSpace from "./_components/ads-space";
import BestSellSection from "./_components/best-sell/best-sell-section";
import CategoryProductCard from "./_components/category/product-card";
import Hero from "./_components/hero";
import ListItems from "./_components/list-items/list-items";
import Offer from "./_components/offer";
import ProductCard from "./_components/product/product";
import Section from "./_components/sections/section";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="px-3 mt-5 flex flex-col gap-2 md:mx-20">
        <Section header="اكتشف الفئات" component={<CategoryProductCard />} />
        <Section header="منتجات مميزة" component={<ProductCard />} />
        <Offer />
        <BestSellSection />
        <ListItems />
        <AdsSpace />
      </div>
    </>
  );
}
