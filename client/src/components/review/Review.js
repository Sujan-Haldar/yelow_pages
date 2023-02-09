const Review = ({ img }) => {
    return (
        <div className="swiper-slide box">
            <img src={img} alt="" />
            <h3>john deo</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
                facere hic.
            </p>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
        </div>
    );
};

export default Review;
