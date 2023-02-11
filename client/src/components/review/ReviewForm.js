import axios from "axios";
import { useState } from "react";
function ReviewForm() {
    const [rating,setRating] = useState(null)
    const [content,setContent] = useState(null)
    const reviewSubmit = async (e)=>{
        try {
            e.preventDefault()
            const data = {
                rating,
                content
            }
            const res = await axios.post("http://localhost:3030/reviews",data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return ( 
        <div class="login-form-container active">
            <form action="" onSubmit= {reviewSubmit}>
                <h3 style={{"color": "#d4911f"}}>SHARE YOUR EXPERIENCE </h3><br/>
                {/* <b>
                    <h1>Name</h1>
                </b>
                <input type="Name" name="name" class="box" placeholder="" required id=""/> */}
                <b>
                    <h1>Rate our overall services</h1><br/>
                </b>
                <div class="slidecontainer">
                    {/* <!-- <p>Default range slider:</p> --> */}
                    <input type="range" min="1" max="5" value={rating} name="rating" onChange={(e)=>setRating(e.target.value)}/>
                </div>
                    <b><strong>
                        <h1>Write Your Feedback</h1>
                    </strong></b>

                    <textarea class="textarea" id="" rows="5" cols="45" required style={{"border" : "var(--border)"}} name = "content" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

                    <input type="submit" value="Submit" class="btn"/>

            </form>
    
        </div>

     );
}

export default ReviewForm;