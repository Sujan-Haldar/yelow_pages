import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import AllBooks from "./AllBooks";
import BookDetails from "./BookDetails";
import BookDonationForm from "./BookDonationForm";
import ForgetPassword from "./ForgetPassword";
import LoginForm from "./LoginForm";
import Mydetails from "./Mydetails";
import PageNotFound from "./PageNotFound";
import Registration from "./Registration";
import ReviewForm from "./review/ReviewForm";
import ReviewSection from "./ReviewSection";
import Sections from "./Sections";
function RouteComponent() {
    return ( 
        <Routes>
            <Route path = "/" element = {<Sections/>} ></Route>
            <Route path = "/reviews" element = {<ReviewSection/>} ></Route>
            <Route path = "/registration" element = {<Registration/>} ></Route>
            <Route path = "/signin" element = {<LoginForm/>} ></Route>
            <Route path = "/forget_pasword" element = {<ForgetPassword/>} ></Route>
            <Route path = "/books" element = {<AllBooks/>} ></Route>

            <Route path = "/bookdonationform" element = {<BookDonationForm/>} ></Route>
            
            <Route path = "/about_us" element = {<AboutUs/>} ></Route>
            <Route path ="/books/:_id" element={<BookDetails/>}></Route>
            <Route path ="/feedback" element={<ReviewForm/>}></Route>
            <Route path ="/myprofile" element={<Mydetails/>}></Route>
            <Route path ="*" element={<PageNotFound/>}></Route>
            
            
        </Routes>
     );
}

export default RouteComponent;