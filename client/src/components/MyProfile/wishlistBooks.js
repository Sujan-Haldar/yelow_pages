import { useState, useEffect } from "react";
import { getToken } from "../../hook/useLogin";
import getWishlistBooks from "../bookRequests/getWishlistBooks";

import "../../assets/css/userSection.css";
import BooksSection from "../common/booksSection";
import RemoveFromWishlist from "../bookRequests/removeFromWishlist";

const WishlistBooks = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            setBooks(await getWishlistBooks(getToken()._id));
        };
        fetchBooks();
    }, []);

    const handleRemove = book => {
        setBooks(books.filter(b => b._id !== book._id));
        RemoveFromWishlist(book);
    };

    return (
        <BooksSection
            lable="My Wishlist"
            books={books}
            onDelete={handleRemove}
        />
    );
};

export default WishlistBooks;
