import Image from "next/image";
import { FC } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface OfferProps {}

const Offer: FC<OfferProps> = ({}) => {
  return (
    <div className="bg-[#FEEFEA] flex flex-col md:flex-row md:justify-between md:p-10 items-center">
      <div className="p-5">
        <span className="bg-yellow-400 rounded font-thin px-2">
          توصيل مجاني
        </span>
        <h1>توصيل مجاني لأكثر من 500 جنيه</h1>
        <p>تسوق بما يزيد عن 500 جنيه واحصل علي توصيل مجاني لأي مكان</p>
        <button className="mt-5 bg-emerald-500 p-2 flex flex-row-reverse items-center gap-2 text-white">
          <AiOutlineArrowLeft />
          تسوق الأن
        </button>
      </div>
      <Image width={200} height={200} src="/offer/offer.png" alt="offer" />
    </div>
  );
};

export default Offer;
