import { NavLink } from "react-router-dom";
function Book({details}) {
    const hrefOfBook = `/books/${details._id}`
    return ( 
        <div className="swiper-slide box">
            <div className="icons">
                <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="image">
                <NavLink to={hrefOfBook}><img src={details.previewImgSrc} alt="" /></NavLink>
            </div>
            <div className="content">
                <h3>{details.title}</h3>
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

export default Book;