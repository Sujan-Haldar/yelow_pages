import axios from "axios";

const getAllBooks = () => {
    return axios.get("http://localhost:3030/books");
};

export default getAllBooks;
