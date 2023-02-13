import { Navigate, Outlet } from "react-router-dom";
import { authentication } from "../hook/useLogin";
function OutletComponent() {
    const auth = authentication();
    return ( auth.isLogedin ? <Outlet/> : <Navigate to="/login"/>);
}

export default OutletComponent;