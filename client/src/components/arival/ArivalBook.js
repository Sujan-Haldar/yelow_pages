import getBookPageLink from "../bookRequests/getBookPageLink";
import getBookImg from "../bookRequests/getBookImg";
function ArivalBook({ book }) {
    return (
        <a href={getBookPageLink(book)} className="swiper-slide box">
            <div className="image">
                <a href={getBookPageLink(book)}>
                    <img src={getBookImg(book)} alt="" />
                </a>
            </div>
            <div classNameName="content">
                <h3>{book.title}</h3>
                {/* <div className="price">
                    $0 <span>$20.99</span>
                </div> */}
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
            </div>
        </a>
    );
}

export default ArivalBook;
