import { NavLink } from "react-router-dom";

import Review from "./review/Review";
// Import Swiper React components
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import getReviews from "./reviewRequests/getReviews";

/* eslint-disable jsx-a11y/anchor-is-valid */
function ReviewSection() {
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            setReviews(await getReviews());
        };
        fetchReviews();
    }, []);

    if (reviews) {
        return (
            <section className="reviews" id="reviews">
                <h1 className="heading">
                    <span>feedbacks</span>
                </h1>

                <div className="swiper reviews-slider">
                    <div className="swiper-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            rewind={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            className="mySwiper"
                        >
                            {reviews.map(review => (
                                <SwiperSlide key={review._id}>
                                    <Review review={review} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="content" style={{ textAlign: "center" }}>
                    <NavLink to="/feedback" className="btn">
                        Give your feedback
                    </NavLink>
                </div>
            </section>
        );
    }
}

export default ReviewSection;
