import Book from "./homesection/book";

import stand from "../image/stand.png";
import book1 from "../image/book-1.png";
import book2 from "../image/book-2.png";
import book3 from "../image/book-3.png";
import book4 from "../image/book-4.png";
import book5 from "../image/book-5.png";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function HomeSection() {
    return (
        <section className="home" id="home">
            <div className="row">
                <div className="content">
                    <h3>upto 75% off</h3>
                    <p>
                        Whatever The Cost of Our Libraries,The Price Is Cheaper
                        Compared To That Of An Ignorant Nation
                    </p>
                    <a href="# " className="btn">
                        donate
                    </a>
                </div>

                <div className="swiper books-slider">
                    <div className="swiper-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            rewind={true}
                            modules={[Autoplay]}
                            className="mySwiper"
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide>
                                <Book preview={book1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Book preview={book2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Book preview={book3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Book preview={book4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Book preview={book5} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <img src={stand} className="stand" alt="" />
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
