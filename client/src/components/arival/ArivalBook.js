import book1 from "../../image/book-1.png";
function ArivalBook() {
    const hrefOfBook = '/'
    return (
        <a href={hrefOfBook} className="swiper-slide box">
            <div className="image">
                <a href={hrefOfBook}><img src={book1} alt=""/></a>
            </div>
            <div classNameName="content">
                <h3>new arrivals</h3>
                <div className="price">$15.99 <span>$20.99</span></div>
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