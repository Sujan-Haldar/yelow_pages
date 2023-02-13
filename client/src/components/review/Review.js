import { useState, useEffect } from "react";
import getUser from "../userRequests/getUser";
import _ from "lodash";

const Review = ({ review }) => {
    // const user = await getUser(review.user);

    const [user, setUser] = useState(null);
    useEffect(() => {
        const getDonor = async () => {
            setUser(await getUser(review.user));
        };
        getDonor();
    }, [review.user]);

    let stars = _.range(review.rating);
    const emptyStars = _.range(5 - review.rating);

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
                {stars.map(ele => (
                    <i key={ele} className="fa fa-star"></i>
                ))}
                {emptyStars.map(ele => (
                    <i key={ele} className="fa fa-star-o"></i>
                ))}
            </div>
        </div>
    );
};

export default Review;
