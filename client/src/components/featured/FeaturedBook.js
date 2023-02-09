import book from "../../image/book-7.png";

function FeaturedBook() {
    return (
        <div className="swiper-slide box">
            <div className="icons">
                <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="image">
                <a href="/"><img src={book} alt="" /></a>
            </div>
            <div className="content">
                <h3>featured books</h3>
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
