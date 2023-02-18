import axios from "axios";

const getAllReqBooks = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/req-books`);
};

export default getAllReqBooks;
