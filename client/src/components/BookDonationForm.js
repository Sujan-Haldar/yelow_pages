// import { NavLink } from "react-router-dom";
import donatebookLogo from "../image/donatebook.png";
function BookDonationForm() {
    return ( 
        <div className="login-form-container">
        <form action="">
        <img src={donatebookLogo} alt="Check your internet" width="100px" style={{"display": "block", "margin": "auto"}}/>
        <h3>Donate Books</h3><br/>
        <b><span>Book Name *</span></b>
        <input type="Name" name="" class="box" placeholder="enter Book name" required id=""/>
        <b><span>Author Name *</span></b>
        <input type="text" name="" class="box" placeholder="enter author name" required id=""/>
        <b><span>Book Details *</span></b>
        <input type="text" class="box" placeholder="enter book details" required id=""/>
        <b><span>Book Condition *</span></b>
        <select name="Book Condition" style={{"height": "40px", "width": "100px", "font-size": "15px"}} id="">
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
        </select>
        <b><span>Book Image *</span><br/></b>
        {/* <!-- <label for="img" style="font-size: small;">Select image:</label> --> */}
        <input type="file" id="img" name="img" accept="image/*" style={{"font-size": "15px"}}/>
        <b><span>UPI id</span></b>
        <input type="text" name="" class="box" placeholder="enter your UPI id" id=""/>
        <input type="submit" value="Donate" class="btn"/>
        </form>

    </div>
 );
}

export default BookDonationForm;