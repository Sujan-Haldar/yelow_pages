import axios from "axios";

export default function resetPassword(password,confirmPassword){
    return axios.post("http://localhost:3030/forget-password",{password,confirmPassword})
}