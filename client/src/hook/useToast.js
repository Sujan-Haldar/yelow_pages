import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function showSucessToast(res,msg = "Operation is sucessfull"){
    const message = res.data.message || msg;
    return toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}


export function showFailureToast(error,msg = "Operation is not sucessfull"){
    const message = error.response.data.message || msg;
    return toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

export function updateLoadingSucessToast(toastId,res,msg = "Operation is sucessfull"){
    const message = res.data.message || msg;
    return toast.update(toastId.current, {
        render: message,
        type: "success",
        isLoading: false
    })
}
export function updateLoadingFailureToast(toastId,error,msg = "Operation is not sucessfull"){
    const message = error.response.data.message || msg;
    return toast.update(toastId.current, {
        render: message,
        type: "error",
        isLoading: false
    })
}