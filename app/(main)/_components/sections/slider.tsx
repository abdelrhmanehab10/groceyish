"use client";

import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import CategoryProductCard from "../category/product-card";

import "swiper/css";
import "swiper/css/navigation";

interface SectionSliderProps {
  component: React.ReactNode;
}

const SectionSlider: FC<SectionSliderProps> = ({ component }) => {
  return (
    <Swiper
      dir="rtl"
      slidesPerView={4}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>{component}</SwiperSlide>
      <SwiperSlide>{component}</SwiperSlide>
      <SwiperSlide>{component}</SwiperSlide>
    </Swiper>
  );
};

export default SectionSlider;
