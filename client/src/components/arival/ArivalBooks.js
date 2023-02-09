import React from "react";
import ArivalBook from "./ArivalBook";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
function ArivalBooks() {
    return ( 
        <div className="swiper arrivals-slider">

        <div className="swiper-wrapper">

        <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        rewind={true}
        modules={[Navigation]}
        
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        className="mySwiper">
        <SwiperSlide><ArivalBook/></SwiperSlide>
        <SwiperSlide><ArivalBook/></SwiperSlide>
        <SwiperSlide><ArivalBook/></SwiperSlide>
        <SwiperSlide><ArivalBook/></SwiperSlide>
        <SwiperSlide><ArivalBook/></SwiperSlide>
        <SwiperSlide><ArivalBook/></SwiperSlide>
        <SwiperSlide><ArivalBook/></SwiperSlide>
        <SwiperSlide><ArivalBook/></SwiperSlide>
        <SwiperSlide><ArivalBook/></SwiperSlide>
      </Swiper>

      
        </div>

    </div>
     );
}

export default ArivalBooks;