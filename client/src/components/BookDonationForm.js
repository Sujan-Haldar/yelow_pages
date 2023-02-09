// import { NavLink } from "react-router-dom";
import { useState } from "react";
import donatebookLogo from "../image/donatebook.png";
import InputTypeFile from "./fromElement/InputTypeFile";
import InputTypeSelect from "./fromElement/InputTypeSelect";
import InputTypeSubmit from "./fromElement/InputTypeSubmit";
import InputTypeText from "./fromElement/InputTypeText";
function BookDonationForm() {
    const [bookName,setBookName] = useState("");
    const [authorName,setAuthorName] = useState("");
    const [bookDetails,setBookDetails] = useState("");
    const [bookCondition,setBookCondition] = useState("Poor");
    const [bookImg,setBookImg] = useState()
    console.log(bookImg)
    return ( 
        <div className="login-form-container">
        <form action="">
            <img src={donatebookLogo} alt="Check your internet" width="100px" style={{"display": "block", "margin": "auto"}}/>
            <h3>Donate Books</h3><br/>

            <InputTypeText inputName ="Book Name" type="text" name="" placeholder="enter Book name" required={true} id="" value = {bookName} setValue = {setBookName}/>

            <InputTypeText inputName ="Author Name" type="text" name="" placeholder="enter author name" required={true} id="" value = {authorName} setValue= {setAuthorName}/>

            <InputTypeText inputName ="Book Details" type="text" name="" placeholder="enter book details" required={true} id="" value={bookDetails} setValue={setBookDetails}/>

            <InputTypeSelect value = {bookCondition} setValue = {setBookCondition}/>

            <InputTypeFile setBookImg = {setBookImg}/>
            
            <InputTypeSubmit value="Donate"/>
        </form>

    </div>
 );
}

export default BookDonationForm;