import axios from "axios";
import { headers } from "../../hook/useLogin";
import { promiseToast } from "../../hook/useToast";

const DeleteBook = book => {
    promiseToast(handleDelete(book._id), "Delete");
};

const handleDelete = async id => {
    await axios.delete(`http://localhost:3030/books/${id}`, headers());
};

export default DeleteBook;
