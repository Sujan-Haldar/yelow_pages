import { Navigate } from "react-router-dom";
// import { authentication } from "../hook/useLogin";
async function PrivateRoute({children}) {
    const auth ={
        isLogedin : true
    } ;
    // console.log(auth)
    return ( auth.isLogedin ? children : <Navigate to="/signin"/>);
}

export default PrivateRoute;