import axios from "axios";
import { headers } from "../../hook/useLogin";
import { useNavigate } from "react-router-dom";

const DeleteBook = async id => {
    // const [navigate] = useNavigate();
    // navigate(-1);
    await axios.delete(`http://localhost:3030/books/${id}`, headers());
};

export default DeleteBook;
