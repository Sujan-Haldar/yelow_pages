import { useState } from "react";
import { ToastContainer } from "react-toastify";
import mainSubmitForm from "../../hook/useForm";
function ReviewForm() {
    const [rating,setRating] = useState(1)
    const [content,setContent] = useState(null)
    const reviewSubmit = (e)=>{
        try {
            e.preventDefault()
            const data = {
                rating,
                content
            }
            console.log(data)
            mainSubmitForm("http://localhost:3030/reviews",data,true)
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
            <ToastContainer/>
        </div>

     );
}

export default ReviewForm;