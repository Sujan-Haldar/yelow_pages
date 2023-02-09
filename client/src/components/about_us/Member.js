import faceboookImg from "../../image/facebook.png";
import linkdinImg from "../../image/linkedin.png";
function Member({memberDetails}) {
    const {name,dept,college,mobile,email,fbLink,ldLink,image} = memberDetails;
    return ( 
        <div class="aboutus box">
                    <div class="content">
                        <div class="aboutimage">
                            <img src={image} alt=""/>
                        </div>
                        <div class="membername">
                            <h3>{name}</h3>
                        </div><br/>
                        <p>{dept}</p> 
                        <p>{college}</p> 
                        <p>Mobile Number: {mobile}</p>
                        <p>Email Id: {email}</p>
                        <br/>
                        <div class="facebook">
                            <a href={fbLink}>
                                <img src={faceboookImg} alt="Example"/>
                              </a>
                            <a href={ldLink}>
                                <img src={linkdinImg} alt="Example"/>
                              </a>
                        </div>

                    </div>
                </div>
     );
}

export default Member;