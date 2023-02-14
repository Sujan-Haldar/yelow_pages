import axios from "axios"
export function setHeaderAtLocalStorage(token){
    localStorage.setItem(
        "auth-token" ,token
    )
}

export function getHeaderFromLocalStorage(){
    return localStorage.getItem("auth-token")
}

export function headers(){
    return {
        headers : {
            "auth-token" : getHeaderFromLocalStorage(),
        }
    }
}

export async function authentication(){
    try {
        const {data} = await axios.get("http://localhost:3030/verify-Login",headers())
        return  data;
    } catch (error) {
        
    }
}


