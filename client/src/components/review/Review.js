import { useState, useEffect } from "react";
import getUser from "../userRequests/getUser";
import _ from "lodash";
import getProfilePic from "../userRequests/getProfilePic";

const Review = ({ review }) => {
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
                        ? getProfilePic(user)
                        : "http://localhost:3030/default_images/man.png"
                }
                alt="Profile Pic"
            />
            <h3>{user ? user.name : "Unknown"}</h3>
            <p>{review.content}</p>
            <p>
                Published On :{" "}
                <time>{new Date(review.publishedTime).toLocaleString()}</time>
            </p>
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
