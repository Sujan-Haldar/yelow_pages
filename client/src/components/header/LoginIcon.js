// import * as React from 'react';
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import '../../assets/css/iconDropdown.css';
import loginContext from "../../context/loginContext";
function LoginIcon() {
    const {isLogedin} = useContext(loginContext)
    if(isLogedin){
        // return (
        //     <div>
        //       {/* <Button
        //         id="fade-button"
        //         aria-controls={open ? 'fade-menu' : undefined}
        //         aria-haspopup="true"
        //         aria-expanded={open ? 'true' : undefined}
        //         onClick={handleClick}
        //       >
        //         Dashboard
        //       </Button> */}


        //       <div className="icons"
        //         // aria-controls={open ? 'fade-menu' : undefined}
        //         // aria-haspopup="true"
        //         // aria-expanded={open ? 'true' : undefined}
        //         onClick={handleClick}
        //       >
                    
        //             {/* <div className="icons"> */}
        //             {/* <div id="search-btn" className="fas fa-search"></div> */}
        //             {/* <NavLink to="/signin"> */}
        //                 <div id="login-btn" className="fas fa-user"></div>
        //             {/* </NavLink> */}
        //             {/* </div> */}
        //       </div>

            







        //       <Menu
        //         // id="fade-menu"
        //         // MenuListProps={{
        //         //   'aria-labelledby': 'fade-button',
        //         // }}
        //         anchorEl={anchorEl}
        //         open={open}
        //         onClose={handleClose}
        //         TransitionComponent={Fade}
        //       >
        //         <MenuItem onClick={handleClose}><NavLink to = "/myprofile">Profile </NavLink></MenuItem>
        //         <MenuItem onClick={handleClose}>My account</MenuItem>
        //         <MenuItem onClick={handleClose}>Logout</MenuItem>
        //       </Menu>
        //     </div>
        //   );  
        return ( 
          <div class="dropdown">
                <div className="icons">
                        {/* <NavLink to="/signin"> */}
                          <div id="login-btn" className="fas fa-user" ></div>
                        {/* </NavLink> */}
                </div> 
               <div class="dropdown-content">
                    <a href="https://blog.hubspot.com/">My Profile</a>
                    <a href="https://academy.hubspot.com/">Donated Books</a>
                    <a href="https://www.youtube.com/user/hubspot">wishlist</a>
                    <a href="https://www.youtube.com/user/hubspot">sign out</a>
                </div>
            </div>
         );
    }
    else {
        return ( 
            <div className="icons">
                    
                    <NavLink to="/signin">
                        <div id="login-btn" className="fas fa-user" ></div>
                    </NavLink>
                    

                </div>
         );
    }
    
    
}

export default LoginIcon;