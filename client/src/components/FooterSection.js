import worldMap from "../image/worldmap.png";
function FooterSection() {
    return ( 
        <section className="footer">

        <div className="box-container">

            {/* <!-- <div className="box">
                <h3>our locations</h3>
                <a href="#"> <i className="fas fa-map-marker-alt"></i> india </a>
                <a href="#"> <i className="fas fa-map-marker-alt"></i> USA </a>
                <a href="#"> <i className="fas fa-map-marker-alt"></i> russia </a>
                <a href="#"> <i className="fas fa-map-marker-alt"></i> france </a>
                <a href="#"> <i className="fas fa-map-marker-alt"></i> japan </a>
                <a href="#"> <i className="fas fa-map-marker-alt"></i> africa </a>
            </div> --> */}

            <div className="box">
                <h3>quick links</h3>
                <a href="#"> <i className="fas fa-arrow-right"></i> home </a>
                <a href="#"> <i className="fas fa-arrow-right"></i> All Books </a>
                <a href="#"> <i className="fas fa-arrow-right"></i> Donate </a>
                <a href="#"> <i className="fas fa-arrow-right"></i> Feedbacks </a>
                
            </div>

            {/* <!-- <div className="box">
                <h3>extra links</h3>
                <a href="#"> <i className="fas fa-arrow-right"></i> account info </a>
                <a href="#"> <i className="fas fa-arrow-right"></i> ordered items </a>
                <a href="#"> <i className="fas fa-arrow-right"></i> privacy policy </a>
                <a href="#"> <i className="fas fa-arrow-right"></i> payment method </a>
                <a href="#"> <i className="fas fa-arrow-right"></i> our serivces </a>
            </div> --> */}
            <div className="box">
                <img src={worldMap} className="map" alt=""/>
            </div>
            <div className="box">
                <h3>contact info</h3>
                <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
                <a href="#"> <i className="fas fa-phone"></i> +111-222-3333 </a>
                <a href="#"> <i className="fas fa-envelope"></i> phoenix.squad.2022@gmail.com </a>
                <a href="#"> <i className="fas fa-arrow-right"></i> about us </a>
            </div>

        </div>

        <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
        </div>

        <div className="credit"> created by Team<span className="font-effect-fire"
                style={{fontFamily: 'Princess Sofia', fontSize: "3rem", fontWeight: "bold", color: "black"}} >
                Phoenix</span> |
            &copy; all rights reserved </div>
''
    </section>
     );
}

export default FooterSection;