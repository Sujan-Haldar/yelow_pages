import { useEffect, useState } from "react";
import "../assets/css/allBooks.css";
import Book from "./AllBooks/Book";
import getAllBooks from "./bookRequests/getAllBooks";

function AllBooks() {
    const [books, setBooks] = useState(null);
    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await getAllBooks();
            setBooks(data);
        };
        fetchBooks();
    }, []);
    if (books) {
        return (
            <section class="featured" id="featured">
                <h1 class="heading">
                    <span>all books</span>
                </h1>

                <div class="swiper featured-slider">
                    <div class="swiper-wrapper allBook">
                        {books.map(book => (
                            <Book book={book} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default AllBooks;
