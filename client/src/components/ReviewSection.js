import { NavLink } from "react-router-dom";
import pic from "../image/pic-1.png";
import pic2 from "../image/pic-2.png";
import pic3 from "../image/pic-3.png";
import pic4 from "../image/pic-4.png";
import Review from "./review/Review";
// Import Swiper React components
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

/* eslint-disable jsx-a11y/anchor-is-valid */
function ReviewSection() {
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
                        <SwiperSlide>
                            {" "}
                            <Review img={pic} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Review img={pic2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Review img={pic3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Review img={pic4} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="content" style={{ textAlign: "center" }}>
            <NavLink to="/feedback" className="btn">Give your feedback</NavLink>
            
            </div>
        </section>
    );
}

export default ReviewSection;
