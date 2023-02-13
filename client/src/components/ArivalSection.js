/* eslint-disable jsx-a11y/anchor-is-valid */
import ArivalBooks from "./arival/ArivalBooks";

import { useEffect, useState } from "react";
import getAllBooks from "./bookRequests/getAllBooks";

function ArivalSection() {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const { data } = await getAllBooks();
            setBooks(data);
        };
        fetchBooks();
    }, []);

    if (books) {
        const firstHalf = books.slice(0, books.length / 2);
        const secondHalf = books.slice(books.length / 2, books.length);

        return (
            <section className="arrivals" id="arrivals">
                <h1 className="heading">
                    <span>new arrivals</span>
                </h1>
                <ArivalBooks books={firstHalf} />
                <ArivalBooks books={secondHalf} />
            </section>
        );
    }
}

export default ArivalSection;
