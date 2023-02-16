import axios from "axios";

const getAllUsers = () => {
    return axios.get("http://localhost:3030/users");
};

export default getAllUsers;
