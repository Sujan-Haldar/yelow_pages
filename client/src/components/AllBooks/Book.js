import { NavLink } from "react-router-dom";
import getBookImg from "../bookRequests/getBookImg";
import getBookPageLink from "../bookRequests/getBookPageLink";
function Book({ book }) {
    return (
        <div className="swiper-slide box">
            <div className="icons">
                <a href="#" className="fas fa-heart"></a>
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
                <a href="#" className="btn">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Book;
