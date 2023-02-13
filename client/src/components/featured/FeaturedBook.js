import getBookImg from "../bookRequests/getBookImg";
import getBookPageLink from "../bookRequests/getBookPageLink";

function FeaturedBook({ book }) {
    return (
        <div className="swiper-slide box">
            <div className="icons">
                <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="image">
                <a href={getBookPageLink(book)}>
                    <img src={getBookImg(book)} alt="" />
                </a>
            </div>
            <div className="content">
                <h3>{book.title}</h3>
                <div className="price">
                    $0 <span>$20.99</span>
                </div>
                <a href="#" className="btn">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default FeaturedBook;
