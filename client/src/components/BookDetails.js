import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/bookDetails.css";
import BookImage from "./bookDetails/BookImage";
import OtherBookDetails from "./bookDetails/OtherBookDetails";
function BookDetails() {
    const params = useParams();
    console.log(params._id)
    const [book,setBook] = useState(null);
    useEffect(()=>{
        async function getBookDetails(){
            const {data} = await axios.get(`http://localhost:3030/books/${params._id}`)
            setBook(data)
        }
        getBookDetails();
        
    },[params._id])
    if (book){
        console.log(book)
        return ( 
            <div class="bookdetails">
                <BookImage image = {book.previewImgSrc}/>
                <OtherBookDetails book = {book}/>
            </div>
         );
    }
}

export default BookDetails;