import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Gitara from "../assets/img/Gitara.png";

const Hero = () => {
  return (
    <div className="mb-25">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={Gitara}
              alt="slide-1"
            />

            <div className="absolute top-[15%] right-[6%] md:right-[35%] text-white max-w-[180px]">
              <h2 className="text-xl md:text-2xl font-bold mb-1 text-primary">
                Takamine
              </h2>
              <p className="text-xs md:text-sm mb-1 text-secondary">гитара</p>
              <p className="text-[10px] md:text-xs mb-1 text-secondary">
                винтажная 12-струнная
              </p>
              <p className="text-[10px] md:text-xs mb-3 text-secondary">
                GJ72CE-12BSB
              </p>

              <button
                className="
                  bg-orange-500 
                  hover:bg-orange-400 
                  text-white 
                  px-4 py-1.5 
                  rounded-md 
                  text-xs md:text-sm font-medium 
                  transition 
                  cursor-pointer 
                  shadow-md 
                  hover:shadow-lg 
                  hover:-translate-y-[2px]
                "
              >
                подробнее
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={Gitara}
              alt="slide-1"
            />

            <div className="absolute top-[15%] right-[6%] md:right-[35%] text-white max-w-[180px]">
              <h2 className="text-xl md:text-2xl font-bold mb-1 text-primary">
                Takamine
              </h2>
              <p className="text-xs md:text-sm mb-1 text-secondary">гитара</p>
              <p className="text-[10px] md:text-xs mb-1 text-secondary">
                винтажная 12-струнная
              </p>
              <p className="text-[10px] md:text-xs mb-3 text-secondary">
                GJ72CE-12BSB
              </p>

              <button
                className="
                  bg-orange-500 
                  hover:bg-orange-400 
                  text-white 
                  px-4 py-1.5 
                  rounded-md 
                  text-xs md:text-sm font-medium 
                  transition 
                  cursor-pointer 
                  shadow-md 
                  hover:shadow-lg 
                  hover:-translate-y-[2px]
                "
              >
                подробнее
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={Gitara}
              alt="slide-1"
            />

            <div className="absolute top-[15%] right-[6%] md:right-[35%] text-white max-w-[180px]">
              <h2 className="text-xl md:text-2xl font-bold mb-1 text-primary">
                Takamine
              </h2>
              <p className="text-xs md:text-sm mb-1 text-secondary">гитара</p>
              <p className="text-[10px] md:text-xs mb-1 text-secondary">
                винтажная 12-струнная
              </p>
              <p className="text-[10px] md:text-xs mb-3 text-secondary">
                GJ72CE-12BSB
              </p>

              <button
                className="
                  bg-orange-500 
                  hover:bg-orange-400 
                  text-white 
                  px-4 py-1.5 
                  rounded-md 
                  text-xs md:text-sm font-medium 
                  transition 
                  cursor-pointer 
                  shadow-md 
                  hover:shadow-lg 
                  hover:-translate-y-[2px]
                "
              >
                подробнее
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;