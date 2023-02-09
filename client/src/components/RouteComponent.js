import { Route, Routes } from "react-router-dom";
import AllBooks from "./AllBooks";
import ForgetPassword from "./ForgetPassword";
import LoginForm from "./LoginForm";
import Registration from "./Registration";
import ReviewSection from "./ReviewSection";
import Sections from "./Sections";
import BookDonationForm from "./BookDonationForm";
import AboutUs from "./AboutUs";
import BookDetails from "./BookDetails";
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
        </Routes>
     );
}

export default RouteComponent;