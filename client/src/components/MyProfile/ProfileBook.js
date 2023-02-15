import getBookImg from "../bookRequests/getBookImg";
import Button from "../common/button";

const ProfileBook = ({ book, onDelete }) => {
    return (
        <tr>
            <td>
                <img
                    className="book_img"
                    src={getBookImg(book)}
                    alt={book.title}
                />
            </td>
            <td
                style={{ width: "80%", textAlign: "left", paddingLeft: "9rem" }}
            >
                <div>
                    <strong>Title : </strong> <span>{book.title}</span>
                </div>

                <div>
                    <strong>Author : </strong> <span>{book.author}</span>
                </div>
                <div>
                    <strong>Donated On : </strong>
                    <span>{new Date(book.donatedOn).toLocaleString()}</span>
                </div>
            </td>
            <td>
                <Button lable="Delete" onClick={() => onDelete(book)} />
            </td>
        </tr>
    );
};

export default ProfileBook;
