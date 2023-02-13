import axios from "axios";

const getUser = id => {
    return axios.get("http://localhost:3030/users/" + id);
};

export default getUser;
