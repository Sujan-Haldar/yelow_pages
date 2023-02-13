import axios from "axios";

const getUser = async id => {
    const { data: user } = await axios.get("http://localhost:3030/users/" + id);
    return user;
};

export default getUser;
