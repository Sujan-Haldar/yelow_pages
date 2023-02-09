const Book = ({ preview }) => {
    return (
        <a href="/" className="swiper-slide">
            <img src={preview} alt="" />
        </a>
    );
};

export default Book;
