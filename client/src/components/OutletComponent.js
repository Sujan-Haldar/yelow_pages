import { Navigate, Outlet } from "react-router-dom";
import { authentication } from "../hook/useLogin";
function OutletComponent() {
    
    return ( authentication() ? <Outlet/> : <Navigate to="/signin"/>);
    
}

export default OutletComponent;