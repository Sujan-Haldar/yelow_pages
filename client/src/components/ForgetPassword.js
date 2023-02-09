import image from "../image/forgetpassword.png";
function ForgetPassword() {
    return ( 
        <div class="login-form-container">
        <form action="">
            {/* <img src="/image/forgetpassword.png" alt="check internet connection" width="100px" style="margin: auto;
            display: block ;"/> */}
            <img src={image} alt="check internet connection" style={{"width":"100px","margin":"auto","display":"block"}}/>


            <br/>
            <h3>forget password</h3>
        
            <p style={{"text-align": "center"}}>Enter your email and we'll send you a OTP to reset your password.</p>
            <br/>
            <input type="email" name="" class="box" placeholder="enter your email" id=""/>
        
            <input type="submit" value="get OTP" class="btn"/>
        </form>
    </div>
     );
}

export default ForgetPassword;