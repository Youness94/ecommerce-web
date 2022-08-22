import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "./categoriesList.css";

import acier_2 from '../../../img/acier_2.jpg'
import acier_3 from '../../../img/acier_3.jpg'
import acier_4 from '../../../img/acier_4.jpg'
// import required modules
import { Pagination, Navigation } from "swiper";

const CategoriesList = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={acier_2}   alt="..."/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={acier_4}   alt="..."/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={acier_2}   alt="..."/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={acier_3}   alt="..."/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={acier_4}   alt="..."/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={acier_3}   alt="..."/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={acier_2}   alt="..."/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={acier_4}   alt="..."/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default CategoriesList