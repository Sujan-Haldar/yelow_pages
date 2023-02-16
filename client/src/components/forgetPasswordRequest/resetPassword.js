import axios from "axios";

export default function resetPassword(password,confirmPassword,token){
    return axios.post(`http://localhost:3030/forget-password/reset/${token}`,{password,confirmPassword})
}
