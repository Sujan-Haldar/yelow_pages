import "./assets/css/global.css";
// import "./assets/js/global.js";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import RouteComponent from "./components/RouteComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
            />
            <HeaderSection />
            <RouteComponent />
            <FooterSection />
        </div>
        // <h1>Hello</h1>
    );
}

export default App;
