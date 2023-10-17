"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#FEEFEA]">
      <div className="text-center md:text-right pt-5 md:pr-10">
        <h1 className="text-2xl font-semibold">
          اكتشف الطبيعة الطازجة في كل قطعة
        </h1>
        <p className="text-xs py-3">وفر اكتر من 60% في اول طلب لك</p>
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
