import axios from "axios";

export default function sendEmail(email){
    return axios.post("http://localhost:3030/verify-account",{email})
}