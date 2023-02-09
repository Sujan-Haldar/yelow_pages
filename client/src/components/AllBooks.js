import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/css/allBooks.css";
import Book from "./AllBooks/Book";
function AllBooks() {
    const [books,setBooks] = useState(null)
    useEffect(()=>{
        async function fetchBooks(){
            const {data} = await axios.get("http://localhost:3030/books")
            setBooks(data)
        }
        fetchBooks()
    },[])
    if(books){
        return ( 
            <section class="featured" id="featured">
    
            <h1 class="heading"> <span>all books</span> </h1>
    
            <div class="swiper featured-slider">
            
                <div class="swiper-wrapper allBook">
                    {
                        books.map((ele,ind)=>(
                            <Book details = {ele}/> 
                        ))
                    }
                </div>
            </div>
    
        </section>
         );
    }
    // return ( 
    //     <section class="featured" id="featured">

    //     <h1 class="heading"> <span>all books</span> </h1>

    //     <div class="swiper featured-slider">
        
    //         <div class="swiper-wrapper allBook">
    //             {
    //                 books.map((ele,ind)=>(
    //                     <Book details = {ele}/> 
    //                 ))
    //             }
    //             {/* <Book/>
    //             <Book/>
    //             <Book/>
    //             <Book/>
    //             <Book/>
    //             <Book/>
    //             <Book/>
    //             <Book/>
    //             <Book/>
    //             <Book/>
    //             <Book/>
    //             <Book/>
    //             <Book/> */}
    //         </div>
    //     </div>

    // </section>
    //  );
}

export default AllBooks;