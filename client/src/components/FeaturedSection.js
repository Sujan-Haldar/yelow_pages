import React from "react";
// Import Swiper React components
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

// import required modules

import FeaturedBook from "./featured/FeaturedBook";

function FeaturedSection() {
    return (
        <section className="featured" id="featured">
            <h1 className="heading">
                {" "}
                <span>featured books</span>{" "}
            </h1>

            <div className="swiper featured-slider">
                <div className="swiper-wrapper">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        rewind={true}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <FeaturedBook />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeaturedBook />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeaturedBook />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeaturedBook />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeaturedBook />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeaturedBook />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeaturedBook />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeaturedBook />
                        </SwiperSlide>
                        <SwiperSlide>
                            <FeaturedBook />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default FeaturedSection;
