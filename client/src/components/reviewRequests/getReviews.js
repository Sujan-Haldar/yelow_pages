import axios from "axios";

const getReviews = async () => {
    const { data: reviews } = await axios.get("http://localhost:3030/reviews");
    return reviews;
};

export default getReviews;
