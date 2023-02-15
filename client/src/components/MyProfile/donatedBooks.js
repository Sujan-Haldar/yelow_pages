import { useState, useEffect } from "react";
import { getToken } from "../../hook/useLogin";
import getAllBooks from "../bookRequests/getAllBooks";
import ProfileBook from "./ProfileBook";

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

    // console.log(donatedBooks);
    // console.log("Helo");

    if (books)
        return (
            <div className="admin_all2">
                <div className="heading">
                    <span>Donated Books</span>
                </div>
                <table style={{ width: "fit-content", alignItems: "center" }}>
                    {books.map(book => (
                        <tr key={book._id}>
                            <ProfileBook book={book} />
                        </tr>
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
