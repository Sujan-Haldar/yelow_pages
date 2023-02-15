import axios from "axios";
import { headers } from "./useLogin";
import { showFailureToast, showSucessToast } from "./useToast";

const header = headers();
export default async function mainSubmitForm(
    url,
    data,
    isHeaderNeeded,
    headers = header
) {
    try {
        if (isHeaderNeeded) {
            // console.log(headers)
            const res = await axios.post(url, data, headers);
            if (res) {
                showSucessToast(res);
            }
            return res;
        } else {
            const res = await axios.post(url, data);
            if (res) {
                showSucessToast(res);
            }
        }
    } catch (error) {
        showFailureToast(error);
    }
}
