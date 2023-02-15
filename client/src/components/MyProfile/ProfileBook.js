import { promiseToast } from "../../hook/useToast";
import DeleteBook from "../bookRequests/deleteBook";
import getBookImg from "../bookRequests/getBookImg";
import Button from "../common/button";

const ProfileBook = ({ book }) => {
    return (
        <div>
            <td>
                <img
                    className="book_img"
                    src={getBookImg(book)}
                    alt={book.title}
                />
            </td>
            <td style={{ width: "75%" }}>
                <h3>Book Name :- {book.title}</h3>
                <h3>Author Name :- {book.author}</h3>
                <h3>
                    Donated On :- {new Date(book.donatedOn).toLocaleString()}
                </h3>
            </td>
            <td>
                <Button lable="Delete" onClick={() => handleDelete(book)} />
            </td>
        </div>
    );
};

const handleDelete = book => {
    promiseToast(DeleteBook(book._id), "Delete");
};

export default ProfileBook;
