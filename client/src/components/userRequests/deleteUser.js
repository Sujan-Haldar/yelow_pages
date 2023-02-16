import axios from "axios";
import { headers } from "../../hook/useLogin";
import { promiseToast } from "../../hook/useToast";

const DeleteUser = user => {
    promiseToast(handleDelete(user._id), "Successfully Deleted");
};

const handleDelete = async id => {
    await axios.delete(`http://localhost:3030/users/${id}`, headers());
};

export default DeleteUser;
