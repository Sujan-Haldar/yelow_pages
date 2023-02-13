import Book from "./homesection/book";

import stand from "../image/stand.png";

import getBookImg from "./bookRequests/getBookImg";

import { useEffect, useState } from "react";
import getAllBooks from "./bookRequests/getAllBooks";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function HomeSection() {
    const [books, setBooks] = useState(null);
    useEffect(() => {
        async function fetchBooks() {
            const { data } = await getAllBooks();
            setBooks(data);
        }
        fetchBooks();
    }, []);

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
                            {books
                                ? books.slice(0, 5).map(book => (
                                      <SwiperSlide>
                                          <Book book={book} />
                                      </SwiperSlide>
                                  ))
                                : null}
                        </Swiper>
                    </div>
                    <img src={stand} className="stand" alt="stand" />
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
