import { NavLink } from "react-router-dom";
import AddToWishlist from "../bookRequests/addToWishlist";
import getBookImg from "../bookRequests/getBookImg";
import getBookPageLink from "../bookRequests/getBookPageLink";
function Book({ book }) {
    return (
        <div className="swiper-slide box">
            <div className="icons">
                <NavLink
                    to=""
                    onClick={() => AddToWishlist(book)}
                    className="fas fa-heart"
                />
            </div>
            <div className="image">
                <NavLink to={getBookPageLink(book)}>
                    <img src={getBookImg(book)} alt="" />
                </NavLink>
            </div>
            <div className="content">
                <h3>{book.title}</h3>
                {/* <div className="price">
                    $0 <span>$20.99</span>
                </div> */}
                <NavLink to={"mailto:abc@gmail.com"} className="btn">
                    Contact
                </NavLink>
            </div>
        </div>
    );
}

export default Book;
