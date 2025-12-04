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

            <div className="absolute top-[30%] right-[12%] md:right-[35%] text-white max-w-xs">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 text-primary">
                Takamine
              </h2>
              <p className="text-sm md:text-base mb-2 text-secondary">гитара</p>
              <p className="text-xs md:text-sm mb-4 text-secondary">
                винтажная 12-струнная
              </p>
              <p className="text-xs md:text-sm mb-6 text-secondary">
                GJ72CE-12BSB
              </p>

              <button
                className="
                  bg-orange-500 
                  hover:bg-orange-400 
                  text-white 
                  px-6 py-2 
                  rounded-md 
                  text-sm font-medium 
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

            <div className="absolute top-[30%] right-[12%] md:right-[35%] text-white max-w-xs">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 text-primary">
                Takamine
              </h2>
              <p className="text-sm md:text-base mb-2 text-secondary">гитара</p>
              <p className="text-xs md:text-sm mb-4 text-secondary">
                винтажная 12-струнная
              </p>
              <p className="text-xs md:text-sm mb-6 text-secondary">
                GJ72CE-12BSB
              </p>

              <button
                className="
                  bg-orange-500 
                  hover:bg-orange-400 
                  text-white 
                  px-6 py-2 
                  rounded-md 
                  text-sm font-medium 
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

            <div className="absolute top-[30%] right-[12%] md:right-[35%] text-white max-w-xs">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 text-primary">
                Takamine
              </h2>
              <p className="text-sm md:text-base mb-2 text-secondary">гитара</p>
              <p className="text-xs md:text-sm mb-4 text-secondary">
                винтажная 12-струнная
              </p>
              <p className="text-xs md:text-sm mb-6 text-secondary">
                GJ72CE-12BSB
              </p>

              <button
                className="
                  bg-orange-500 
                  hover:bg-orange-400 
                  text-white 
                  px-6 py-2 
                  rounded-md 
                  text-sm font-medium 
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
