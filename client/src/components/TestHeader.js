function TestHeader() {
    const x = async()=>{
        await fetch("http://localhost:3030/getHead")
            .then(response=>{
                console.log(response.headers)
            })
    }
    return ( 
        <div>

            <button onClick={x}>GetHead</button>
        </div>
     );
}

export default TestHeader;