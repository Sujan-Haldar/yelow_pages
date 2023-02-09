/* eslint-disable jsx-a11y/anchor-is-valid */
import ArivalBooks from "./arival/ArivalBooks";

function ArivalSection() {

    return ( 
            <section className="arrivals" id="arrivals">

            <h1 className="heading"> <span>new arrivals</span> </h1>
            <ArivalBooks/>
            <ArivalBooks/>
            
        </section>
     );
}

export default ArivalSection;