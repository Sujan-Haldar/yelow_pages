import { NavLink } from "react-router-dom";
import { authentication } from "../hook/useLogin";
import LoginIcon from "./header/LoginIcon";
import Button from "./common/button";

function HeaderSection() {
    return (
        <header className="header">
            <div className="header-1 header-2">
                <a href=" #" className="logo">
                    {" "}
                    <i className="fas fa-book"></i> yellow pages{" "}
                </a>

                <nav className="navbar">
                    <NavLink to="/">home</NavLink>
                    <NavLink to="./books">all books</NavLink>
                    <NavLink to="/bookdonationform">donate</NavLink>
                    <NavLink to="/reviews">feedbacks</NavLink>
                    <NavLink to="/about_us">about us</NavLink>
                </nav>
                {!authentication() ? (
                    <>
                        <NavLink to="/signin">
                            <Button lable="Sign In" className="btn-primary" />
                        </NavLink>
                        <NavLink to="/registration">
                            <Button lable="Sign Up" className="btn-secondary" />
                        </NavLink>
                    </>
                ) : null}
                <LoginIcon />
            </div>

            <div className="header-2"></div>
        </header>
    );
}

export default HeaderSection;
