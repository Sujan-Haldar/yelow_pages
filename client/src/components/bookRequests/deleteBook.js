import axios from "axios";
import { headers } from "../../hook/useLogin";

const DeleteBook = async id => {
    await axios.delete(`http://localhost:3030/books/${id}`, headers());
};

export default DeleteBook;
