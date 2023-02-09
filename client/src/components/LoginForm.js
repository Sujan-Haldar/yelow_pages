import { NavLink } from "react-router-dom";
function LoginForm() {
    return ( 
            <div className="login-form-container">
            <form action="">
                <h3>Sign in</h3>
                <b><span>Username *</span></b>
                <input type="email" name="" className="box" placeholder="enter your email"  required id=""/>
                <b><span>Password *</span></b>
                <input type="password" name="" className="box" placeholder="enter your password" id=""/>
                <div className="checkbox">
                    <input type="checkbox" name="" id="remember-me"/>
                    <label for="remember-me"> remember me</label>
                </div>
                <input type="submit" value="sign in" className="btn"/>
                <p>forget password ? <NavLink to="/forget_pasword">click here</NavLink></p>
                <p>don't have an account ? <NavLink to="/registration">click here</NavLink></p>
            </form>

        </div>
     );
}

export default LoginForm;