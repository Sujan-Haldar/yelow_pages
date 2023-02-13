import axios from "axios";
import { headers } from "./useLogin";
import { showFailureToast, showSucessToast } from "./useToast";

const header = headers()
export default async function mainSubmitForm(url,data,isHeaderNeeded,headers = header){
    try {
        if(isHeaderNeeded){
            const res = await axios.post(url,data,headers);
            if(res){
                showSucessToast(res) 
            }
        }else{
            const res = await axios.post(url,data);
            if(res){
                showSucessToast(res) 
            }
        }
    } catch (error) {
        console.log(error)
        showFailureToast(error)
    }
}