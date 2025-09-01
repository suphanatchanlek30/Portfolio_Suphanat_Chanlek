"use client";

import portfolioData from "@/instances/portfolio-data";
import PortfolioCard from "./PortfolioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

export default function Portfolio() {
  return (
    <section className="relative bg-black text-white py-12 md:py-24 px-6 overflow-hidden">
      {/* ไฟมุมตกแต่ง (ลด blur เพื่อความลื่นบน iOS) */}
      <div className="absolute top-1/2 left-0 w-40 h-40 md:w-72 md:h-72 bg-gray-500/30 blur-xl md:blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-8 right-16 w-32 h-32 md:w-56 md:h-56 bg-gray-500/15 blur-lg md:blur-xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <div className="flex justify-center mb-3 md:mb-4">
          <span className="px-4 md:px-5 py-1 rounded-[8px] bg-[#191919] text-white text-xs md:text-sm">
            Competition Experience
          </span>
        </div>
        <h1 className="text-base md:text-xl font-normal text-center mb-8 md:mb-12 text-[#929CA5]">
          What Competition Experience ?
        </h1>

        {/* Swiper Carousel */}
        <Swiper
          grabCursor={true}
          loop={true}
          speed={600}
          cssMode={false}
          watchSlidesProgress={true}
          freeMode={false}
          centeredSlides={false}
          slidesPerGroup={1}
          style={{
            WebkitOverflowScrolling: "touch",
            willChange: "transform",
            transform: "translate3d(0,0,0)",
            touchAction: "pan-x"
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 310 },
            480: { slidesPerView: 2, spaceBetween: 280 },
            640: { slidesPerView: 3.2, spaceBetween: 280 },
            1024: { slidesPerView: 3.2, spaceBetween: 60 },
            1440: { slidesPerView: 4.2, spaceBetween: 200 },
          }}
        >
          {portfolioData.map((item) => (
            <SwiperSlide key={item.id}>
              <PortfolioCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
