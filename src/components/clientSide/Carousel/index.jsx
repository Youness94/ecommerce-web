import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import acier_2 from '../../../img/acier_2.jpg'
import acier_3 from '../../../img/acier_3.jpg'
import acier_4 from '../../../img/acier_4.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "./carousel.css";

// import required modules
import { Navigation } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="myCarousel">
        <SwiperSlide>
        <img src={acier_2}   alt="..."/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={acier_3}   alt="..."/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={acier_4}  alt="..."/>
        </SwiperSlide>
       
      </Swiper>
     
    </>
  );
}
export default Carousel








// import React from 'react'
// import acier_2 from '../../../img/acier_2.jpg'
// import acier_3 from '../../../img/acier_3.jpg'
// import acier_4 from '../../../img/acier_4.jpg'

// const Carousel = () => {
//   return (
//     <>
//       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
//             <div className="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//             </div>
//             <div className="carousel-inner">
//             <div className="carousel-item active">
//                   <img src={acier_2} className="d-block w-100" height='500px' alt="..."/>
//             </div>
//             <div className="carousel-item">
//                   <img src={acier_3} className="d-block w-100" height='500px' alt="..."/>
//             </div>
//             <div className="carousel-item">
//                   <img src={acier_4} className="d-block w-100" height='500px' alt="..."/>
//             </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//             </button>
//       </div>
//     </>
//   )
// }

// export default Carousel
