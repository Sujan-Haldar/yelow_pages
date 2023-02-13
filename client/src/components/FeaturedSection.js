import { React, useEffect, useState } from "react";
// Import Swiper React components
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import FeaturedBook from "./featured/FeaturedBook";
import getAllBooks from "./bookRequests/getAllBooks";

function FeaturedSection() {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        async function fetchBooks() {
            const { data } = await getAllBooks();
            setBooks(data);
        }
        fetchBooks();
    }, []);

    return (
        <section className="featured" id="featured">
            <h1 className="heading">
                <span>featured books</span>
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
                        {books
                            ? books.slice(0, 7).map(book => (
                                  <SwiperSlide>
                                      <FeaturedBook book={book} />
                                  </SwiperSlide>
                              ))
                            : null}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default FeaturedSection;
