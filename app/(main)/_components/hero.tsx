import Image from "next/image";
import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#FEEFEA]">
      <div className="text-center md:text-right pt-5 md:pr-10">
        <h1 className="text-2xl font-semibold">
          اكتشف الطبيعة الطازجة في كل قطعة
        </h1>
        <p className="text-xs py-3">وفر اكتر من 60% في اول طلب لك</p>
        <form className="flex">
          <input
            type="text"
            placeholder="ادخل البريد الألكتروني"
            className="placeholder:text-sm px-2 w-full"
          />
          <button
            type="submit"
            className="text-sm bg-emerald-500 p-2  text-white"
          >
            شارك
          </button>
        </form>
      </div>
      <div className="rotate-[180deg]">
        <Image
          width={400}
          height={400}
          className="w-full"
          src="/hero/hero-img.png"
          alt="hero-img"
        />
      </div>
    </div>
  );
};

export default Hero;
