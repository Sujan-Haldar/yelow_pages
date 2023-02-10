// import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import donatebookLogo from "../image/donatebook.png";
import InputTypeFile from "./fromElement/InputTypeFile";
import InputTypeSelect from "./fromElement/InputTypeSelect";
import InputTypeSubmit from "./fromElement/InputTypeSubmit";
import InputTypeText from "./fromElement/InputTypeText";
// import PreviewImage from "./fromElement/PreviewImage";
function BookDonationForm() {
    const [bookName,setBookName] = useState("");
    const [authorName,setAuthorName] = useState("");
    const [bookDetails,setBookDetails] = useState("");
    const [bookCondition,setBookCondition] = useState("Poor");
    const [bookImg,setBookImg] = useState(null)
    const submitForm = async(e)=>{
        try {
            const formData = new FormData();
            formData.append("title", bookName);
            formData.append("author", authorName);
            formData.append("publishYear", 2020);
            formData.append("file", bookImg); 

            const res = await axios.post("http://localhost:3030/books",formData)
            console.log(res)
        } catch (error) {
            console.log(error) 
        }
        

    }
    return ( 
        <div className="login-form-container">
        <form action="" onSubmit={submitForm}>
            <img src={donatebookLogo} alt="Check your internet" width="100px" style={{"display": "block", "margin": "auto"}}/>
            <h3>Donate Books</h3><br/>

            <InputTypeText inputName ="Book Name" type="text" name="" placeholder="enter Book name" required={true} id="" value = {bookName} setValue = {setBookName}/>

            <InputTypeText inputName ="Author Name" type="text" name="" placeholder="enter author name" required={true} id="" value = {authorName} setValue= {setAuthorName}/>

            <InputTypeText inputName ="Book Details" type="text" name="" placeholder="enter book details" required={true} id="" value={bookDetails} setValue={setBookDetails}/>

            <InputTypeSelect value = {bookCondition} setValue = {setBookCondition}/>

            <InputTypeFile setBookImg = {setBookImg}/>
            
            {/* <PreviewImage file = {URL.createObjectURL(bookImg)}/> */}
            <InputTypeSubmit value="Donate"/>
        </form>

    </div>
 );
}

export default BookDonationForm;