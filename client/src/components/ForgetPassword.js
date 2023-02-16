import { useState } from "react";
import { useParams } from "react-router-dom";
import { showFailureToast, showSucessToast } from "../hook/useToast";
import image from "../image/forgetpassword.png";
import resetPassword from "./forgetPasswordRequest/resetPassword";
function ForgetPassword() {
    const params = useParams();
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const submit =async (e)=>{
        e.preventDefault();
        try {
           const res = await resetPassword(password,confirmPassword,params.token) ;
           showSucessToast(res)
           console.log(res)
        } catch (error) {
            showFailureToast(error)
        }
    }
    return ( 
        <div class="login-form-container">
        <form action="" onSubmit={submit}>
            {/* <img src="/image/forgetpassword.png" alt="check internet connection" width="100px" style="margin: auto;
            display: block ;"/> */}
            <img src={image} alt="check internet connection" style={{"width":"100px","margin":"auto","display":"block"}}/>


            <br/>
            <h3>forget password</h3>
        
            <p style={{"text-align": "center"}}>Please enter your password and confirm password.</p>
            <br/>
            <input type="password" name="" class="box" placeholder="enter your password" id="" value={password} onChange = {(e)=>setPassword(e.target.value)}/>

            <input type="password" name="" class="box" placeholder="confirm password" id="" value={confirmPassword} onChange = {(e)=>setConfirmPassword(e.target.value)}/>


            <input type="submit" value="Change password" class="btn"/>
        </form>
    </div>
     );
}

export default ForgetPassword;