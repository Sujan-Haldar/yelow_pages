

function ReviewForm() {
    return ( 
        <div class="login-form-container active">
            <form action="">
                <h3 style={{"color": "#d4911f"}}>SHARE YOUR EXPERIENCE </h3><br/>
                <b>
                    <h1>Name</h1>
                </b>
                <input type="Name" name="" class="box" placeholder="" required id=""/>
                <b>
                    <h1>Rate our overall services</h1><br/>
                </b>
                <div class="slidecontainer">
                    {/* <!-- <p>Default range slider:</p> --> */}
                    <input type="range" min="1" max="5" value="1" />
                </div>
                    <b><strong>
                        <h1>Write Your Feedback</h1>
                    </strong></b>

                    <textarea class="textarea" id="" rows="5" cols="45" required style={{"border" : "var(--border)"}}></textarea>

                    <input type="submit" value="Submit" class="btn"/>

            </form>
    
        </div>

     );
}

export default ReviewForm;