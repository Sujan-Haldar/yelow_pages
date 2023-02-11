import "../assets/css/pageNotFound.css";
function PageNotFound() {
    return ( 
        <>
            <div class="error1">
                 <h1>Page not found !!</h1>
            </div>
            <div class="error"><img src={require("../image/bably.jpg")} alt="Loading"/></div>
        </>
     );
}

export default PageNotFound;