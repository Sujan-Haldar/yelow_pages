import getUser from "../userRequests/getUser";

import { useState, useEffect } from "react";

const Review = ({ review }) => {
    // const user = await getUser(review.user);

    const [user, setUser] = useState(null);
    useEffect(() => {
        const getDonor = async () => {
            setUser(await getUser(review.user));
        };
        getDonor();
    }, [review.user]);

    // let starCount = review.rating;

    return (
        <div className="swiper-slide box">
            <img
                src={
                    user
                        ? user.profilePicSrc
                        : "https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png"
                }
                alt="Profile Pic"
            />
            <h3>{user ? user.name : "Unknown"}</h3>
            <p>{review.content}</p>
            <div className="stars">
                {/* {starCount * <i className="fas fa-star"></i>} */}

                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
        </div>
    );
};

export default Review;
