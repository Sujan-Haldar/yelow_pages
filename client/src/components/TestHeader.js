import axios from 'axios';
function TestHeader() {
    const x = async()=>{
        const {data} = await axios.get("http://localhost:3030/verify-Login")
        console.log(data)
        
            
    }
    return ( 
        <div>

            <button onClick={x}>GetHead</button>
            
        </div>
     );
}

export default TestHeader;