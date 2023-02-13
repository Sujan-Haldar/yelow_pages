import getBookImg from "../bookRequests/getBookImg";
import getBookPageLink from "../bookRequests/getBookPageLink";

const Book = ({ book }) => {
    return (
        <a href={getBookPageLink(book)} className="swiper-slide">
            <img src={getBookImg(book)} alt="book" />
        </a>
    );
};

export default Book;
