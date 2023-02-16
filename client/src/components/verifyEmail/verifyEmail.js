import axios from "axios";

export default function verifyEmail(email,token){
    return axios.post(`http://localhost:3030/verify-account/${token}`,{email})
}
