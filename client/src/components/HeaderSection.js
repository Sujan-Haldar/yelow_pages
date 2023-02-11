import { NavLink } from "react-router-dom";
import LoginIcon from "./header/LoginIcon";
function HeaderSection() {
    return ( 
        <header className="header">

        <div className="header-1 header-2">

            <a href=" #" className="logo"> <i className="fas fa-book"></i> yellow pages </a>

            <nav className="navbar">
                <NavLink to="/">home</NavLink>
                <NavLink to="./books">all books</NavLink>
                <NavLink to="/bookdonationform">donate</NavLink>
                <NavLink to="/reviews">feedbacks</NavLink>
                <NavLink to="/about_us">about us</NavLink>
            </nav>
            <form action="" className="search-form">
                <input type="search" name="" placeholder="search here..." id="search-box"/>
                <label for="search-box" className="fas fa-search"></label>
            </form>
            <LoginIcon/>

        </div>

        <div className="header-2">

        </div>
    </header>
     );
}

export default HeaderSection;