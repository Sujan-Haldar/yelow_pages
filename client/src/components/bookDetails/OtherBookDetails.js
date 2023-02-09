function OtherBookDetails({book}) {
    const {title,author,} = book;
    return ( 
        <div class="bookdetails2">

            <form action="">
                <h1 style={{"text-align": "center", "color": "#d4911f"}}>{title}</h1><br/>
                <h3 style={{"text-align": "center", "color": "#d4911f"}}>{author}</h3><br/>
                <b><span class="bookdet" style={{"color": "#d4911f"}}>Book Details :- </span></b>
                <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio libero nisi. Nesciunt non
                    debitis quam fugiat cumque odit, voluptas, eum adipisci pariatur nobis doloremque minima explicabo,
                    nam rerum dolor!</div>
                <b><br/><span class="bookdet" style={{"color": "#d4911f"}}> Book Condition :- </span></b>
                <span>Good</span>
                <b><br/><b/><span style={{"color": "#d4911f"}}>Upi Id :-</span></b>
                <span>sunandan.ghosh@apl</span>
                <b><br/><br/><span style={{"color": "#d4911f"}}>Mobile Number :-</span></b>
                <span>9564714174</span>

                <b><br/><br/><span style={{"color": "#d4911f"}}> Address :-</span></b>
                <span>Batanagar</span>

                <br/>
                <br/>

                <input type="submit" value="Add To Wishlist" class="btn" style={{"text-align":"center"}}/>
                <input type="submit" value="Contact" class="btn"/>

            </form>
            <br/>

        </div>
     );
}

export default OtherBookDetails;