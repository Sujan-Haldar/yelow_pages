import Book from "./homesection/book";

import stand from "../image/stand.png";
import { Link } from "react-router-dom";

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
                    <h1>
                        " It's not how much we give, but how much love we put
                        into giving."
                    </h1>
                    <span>- Mother Teresa</span>
                    <br />
                    <br />
                    <Link to="/bookdonationform" class="btn">
                        donate
                    </Link>
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
