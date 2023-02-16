import { NavLink } from "react-router-dom";
import { authentication } from "../hook/useLogin";
import LoginIcon from "./header/LoginIcon";
import Button from "./common/button";
import { getToken } from "../hook/useLogin";

function HeaderSection() {
    return (
        <header className="header">
            <div className="header-1 header-2">
                <a href=" #" className="logo">
                    {" "}
                    <i className="fas fa-book"></i>yelow pages{" "}
                </a>

                <nav className="navbar">
                    <NavLink to="/">home</NavLink>
                    <NavLink to="./books">all books</NavLink>
                    <NavLink to="/bookdonationform">donate</NavLink>
                    <NavLink to="/reviews">feedbacks</NavLink>
                    <NavLink to="/about_us">about us</NavLink>
                    {getToken() && getToken().isAdmin ? (
                        <>
                            {/* <NavLink to="/admin-section-allbooks">
                                Admin Section
                            </NavLink>
                            <NavLink to="/admin-section-allusers">
                                Admin Section
                            </NavLink> */}
                            <NavLink to="/admin-section">Admin Section</NavLink>
                        </>
                    ) : null}
                </nav>
                {!authentication() ? (
                    <span>
                        <NavLink to="/signin">
                            <Button lable="Sign In" className="btn-primary" />
                        </NavLink>
                        <NavLink to="/registration">
                            <Button lable="Join Us" className="btn-secondary" />
                        </NavLink>
                    </span>
                ) : null}
                <LoginIcon />
            </div>

            <div className="header-2"></div>
        </header>
    );
}

export default HeaderSection;
