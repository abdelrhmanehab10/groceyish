import { FC } from "react";
import BestSellCard from "./best-sell-card";

interface BestSellSectionProps {}

const BestSellSection: FC<BestSellSectionProps> = ({}) => {
  return (
    <div className="py-4">
      <div className="flex items-center md:justify-between gap-10">
        <h3 className="font-bold">الأكثر بيعا اليوم</h3>
        <ul className="flex text-sm gap-2 md:gap-10">
          <li className="transition hover:text-emerald-500 cursor-pointer">
            مميز
          </li>
          <li className="transition hover:text-emerald-500 cursor-pointer">
            شائع
          </li>
          <li className="transition hover:text-emerald-500 cursor-pointer">
            جديد
          </li>
        </ul>
        <h3 className="p-2 px-4 rounded text-white bg-red-500">
          ينتهي بعد: 10:56:21
        </h3>
      </div>
      <div className="py-5">
        <BestSellCard />
      </div>
    </div>
  );
};

export default BestSellSection;
