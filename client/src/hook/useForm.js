import axios from "axios"
import { headers} from "./useLogin";
import { showSucessToast,showFailureToast } from "./useToast";

const header = headers()
export default async function mainSubmitForm(url,data,headers = header){
    try {
        const res = await axios.post(url,data,headers);
        if(res){
            showSucessToast(res) 
        }
    } catch (error) {
        showFailureToast(error)
    }
}