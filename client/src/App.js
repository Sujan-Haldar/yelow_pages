import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/global.css";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import RouteComponent from "./components/RouteComponent";
import loginContext from "./context/loginContext";
import { authentication } from "./hook/useLogin";
function App() {
    const [isLogedin,setIsLogedin] = useState(authentication())
    return (
        <div>
            <ToastContainer
                position={"top-center"}
                hideProgressBar={false}
                autoClose={5000}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                progress={undefined}
                theme={"colored"}
                style={{ scale: "1.2" }}
            />
            <loginContext.Provider value={{isLogedin,setIsLogedin}}>
                <HeaderSection/>
                <RouteComponent />
                <FooterSection />
            </loginContext.Provider>
        </div>
    );
}

export default App;
