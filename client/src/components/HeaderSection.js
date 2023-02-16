import { NavLink } from "react-router-dom";
import { authentication, getToken } from "../hook/useLogin";
import Button from "./common/button";
import LoginIcon from "./header/LoginIcon";

function HeaderSection() {
    return (
        <header className="header">
            <div className="header-1 header-2">
                <a href=" #" className="logo">
                    {" "}
                    <i className="fas fa-book"></i>yelow pages{" "}
                </a>

                <nav className="navbar">
                    <NavLink to="/" style={({isActive})=>{
                        return isActive ? {backgroundColor : "#53391c"} : {}
                    }}>home</NavLink>

                    <NavLink to="./books" style={({isActive})=>{
                        return isActive ? {backgroundColor : "#53391c"} : {}
                    }}>all books</NavLink>

                    <NavLink to="/bookdonationform" style={({isActive})=>{
                        return isActive ? {backgroundColor : "#53391c"} : {}
                    }}>donate</NavLink>

                    <NavLink to="/reviews" style={({isActive})=>{
                        return isActive ? {backgroundColor : "#53391c"} : {}
                    }}>feedbacks</NavLink>

                    <NavLink to="/about_us" style={({isActive})=>{
                        return isActive ? {backgroundColor : "#53391c"} : {}
                    }}>about us</NavLink>

                    {getToken() && getToken().isAdmin ? (
                        <>
                            {/* <NavLink to="/admin-section-allbooks">
                                Admin Section
                            </NavLink>
                            <NavLink to="/admin-section-allusers">
                                Admin Section
                            </NavLink> */}
                            <NavLink to="/admin-section" style={({isActive})=>{
                            return isActive ? {backgroundColor : "#53391c"} : {}
                            }}>Admin Section</NavLink>
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
