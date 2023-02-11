import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { NavLink } from "react-router-dom";
function LoginIcon() {
    const signIn = true
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    if(signIn){
        return (
            <div>
              {/* <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Dashboard
              </Button> */}


              <div className="icons"
                // aria-controls={open ? 'fade-menu' : undefined}
                // aria-haspopup="true"
                // aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                    
                    {/* <div className="icons"> */}
                    {/* <div id="search-btn" className="fas fa-search"></div> */}
                    {/* <NavLink to="/signin"> */}
                        <div id="login-btn" className="fas fa-user"></div>
                    {/* </NavLink> */}
                    {/* </div> */}
              </div>

            







              <Menu
                // id="fade-menu"
                // MenuListProps={{
                //   'aria-labelledby': 'fade-button',
                // }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}><NavLink to = "/myprofile">Profile </NavLink></MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          );  
    }
    else {
        return ( 
            <div className="icons">
                    {/* <div id="search-btn" className="fas fa-search"></div> */}
                    <NavLink to="/signin">
                        <div id="login-btn" className="fas fa-user"></div>
                    </NavLink>
                </div>
         );
    }
    
}

export default LoginIcon;