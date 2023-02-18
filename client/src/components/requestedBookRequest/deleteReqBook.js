import axios from "axios";
import { headers } from "../../hook/useLogin";
import { promiseToast } from "../../hook/useToast";

const DeleteReqBook = book => {
    promiseToast(handleDelete(book._id), "Successfully Deleted");
};

const handleDelete = async id => {
    await axios.delete(
        `${process.env.REACT_APP_API_URL}/req-books/${id}`,
        headers()
    );
};

export default DeleteReqBook;
