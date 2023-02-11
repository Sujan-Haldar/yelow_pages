import "../assets/css/myDetails.css";
import loginImage from "../image/login.png";
function Mydetails() {
    return ( 
        <div class="myacc">
        <div class="myacc1">
            <div class="abc">
                <div class="abc_img"><img src={loginImage} alt="check your internet" width="80px"/></div>

                <div class="abc_name">
                    <h4>hello,</h4>
                    <h2>Bhairab Roy</h2>
                </div>
            </div>
            <div class="abc1">
                <ul style={{"list-style": "none"}}>
                    <li><a href="#" style={{"font-size": "2.8rem"}}>Donated Books</a></li>  
                    <li><a href="#" style={{"font-size": "2.8rem"}}>wishlist</a></li>
                    <li><a href="#" style={{"font-size": "2.8rem"}}>sign out</a></li>
                </ul>
            </div>
        </div>

        <div class="myacc2">

            <form action="">
                <div>
                    <h2 style={{"text-align": "center", "color": "#d4911f"}}>Personal Information</h2>
                </div>
                <div> <b><span style={{"color":"#694609"}}>Name </span></b></div>
                <div><input type="Name" name="" class="box1" placeholder="first name" id=""/>
                    <input type="Name" name="" class="box1" placeholder="last name" id=""/>
                </div>

                <div><b><span style={{"color":"#694609"}}>Mobile Number </span></b></div>
                <div> <input type="tel" name="" class="box1" placeholder="enter your number" pattern="[0-9]{0,10}"
                        id=""/></div>
                <div><b><span style={{"color":"#694609"}}>Email </span></b></div>
                <div><input type="email" name="" class="box1" placeholder="enter your email" id=""/></div>
                <div> <b><span style={{"color":"#694609"}}>Address </span></b></div>
                <div> <input type="text" name="" class="box1" placeholder="enter your address" id="" width="auto"/>
                </div>
            </form>

        </div>
    </div>
     );
}

export default Mydetails;