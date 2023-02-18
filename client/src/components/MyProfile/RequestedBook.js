import { useState, useEffect } from "react";
import { getToken } from "../../hook/useLogin";
// import getAllBooks from "../bookRequests/getAllBooks";

import "../../assets/css/userSection.css";
import DeleteReqBook from "../requestedBookRequest/deleteReqBook";
import BooksSection from "./booksSection";
import getAllReqBooks from "../requestedBookRequest/getAllReqBooks";

const RequestedBooks = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await getAllReqBooks();
            setBooks(data.filter(book => book.requestedBy === getToken()._id));
        };
        fetchBooks();
    }, []);

    const handleDelete = book => {
        setBooks(books.filter(b => b._id !== book._id));
        DeleteReqBook(book);
    };

    return (
        <div className="admin_all2">
            <BooksSection
                lable="Requested Books"
                books={books}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default RequestedBooks;
