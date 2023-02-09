import "./assets/css/global.css";
// import "./assets/js/global.js";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import RouteComponent from "./components/RouteComponent";
function App() {
  return (
    <div>
        <HeaderSection/>
        <RouteComponent/>
        <FooterSection />
    </div>
    // <h1>Hello</h1>
    
  );
}

export default App;
