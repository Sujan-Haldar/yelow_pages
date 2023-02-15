import { useState, useEffect } from "react";
import { getToken } from "../../hook/useLogin";
import getAllBooks from "../bookRequests/getAllBooks";
import ProfileBook from "./ProfileBook";

import "../../assets/css/userSection.css";
import DeleteBook from "../bookRequests/deleteBook";

const DonatedBooks = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await getAllBooks();
            setBooks(data.filter(book => book.donatedBy === currentUser._id));
        };
        fetchBooks();
    }, []);

    const currentUser = getToken();

    if (books)
        return (
            <div className="admin_all2">
                <div className="heading">
                    <span>Donated Books</span>
                </div>
                <table style={{ margin: "auto" }}>
                    {books.map(book => (
                        <ProfileBook
                            key={book._id}
                            book={book}
                            onDelete={() => {
                                setBooks(books.filter(b => b._id !== book._id));
                                DeleteBook(book);
                            }}
                        />
                    ))}
                </table>
            </div>
        );

    return (
        <div className="admin_all2">
            <div className="heading">
                <span>You Have Not Donated Any Books</span>
            </div>
        </div>
    );
};

export default DonatedBooks;
