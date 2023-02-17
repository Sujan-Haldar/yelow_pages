import React from "react";
import ArivalBook from "./ArivalBook";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function ArivalBooks({ books }) {
    return (
        <div className="swiper arrivals-slider">
            <div className="swiper-wrapper">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    rewind={true}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {books.map(book => (
                        <SwiperSlide>
                            <ArivalBook book={book} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default ArivalBooks;
