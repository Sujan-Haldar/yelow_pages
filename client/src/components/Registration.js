import { NavLink } from "react-router-dom";
function Registration() {
    return ( 
        <div className="login-form-container">
        <form action="">
            <h3>Create an Account</h3>
            <b><span>Name *</span></b>
            <input type="Name" name="" className="box" placeholder="enter your name" required id=""/>
            <b><span>Mobile Number *</span></b>
            <input type="tel" name="" className="box" placeholder="enter your number" pattern="[0-9]{0,10}" required id=""/>
            <b><span>Email *</span></b>
            <input type="email" name="" className="box" placeholder="enter your email" required id=""/>
            <b><span>Address *</span></b>
            <input type="text" name="" className="box" placeholder="enter your address" required id=""/>
            <b><span>password *</span></b>
            <input type="password" name="" className="box" placeholder="enter your password" required id=""/>
            <div className="checkbox">
                <input type="checkbox" name="" id="remember-me"/>
                <label for="remember-me"> remember me</label>
            </div>
            <input type="submit" value="Create" className="btn"/>
            <p>have an account ? <NavLink to="/signin">sign in</NavLink></p>
        </form>

    </div>
     );
}

export default Registration;