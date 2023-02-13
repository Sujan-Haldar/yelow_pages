import axios from "axios";

const getBook = id => {
    return axios.get("http://localhost:3030/books/" + id);
};

export default getBook;
