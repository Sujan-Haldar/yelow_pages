import FeaturedSection from "./FeaturedSection";
import HomeSection from "./HomeSection";
// import NewsletterSection from "./NewsletterSection";
import ArivalSection from "./ArivalSection";
import ButtomNavbar from "./ButtomNavbar";
import DealSection from "./DealSection";
// import ReviewSection from "./ReviewSection";
function Sections() {
    return (
        <div>
            <HomeSection />
            <ButtomNavbar/>
            <FeaturedSection />
            {/* <NewsletterSection /> */}
            <ArivalSection />
            <DealSection />
            {/* <ReviewSection /> */}
        </div>
    );
}

export default Sections;
