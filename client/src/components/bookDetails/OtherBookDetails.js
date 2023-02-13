import getUser from "../userRequests/getUser";
import { useEffect, useState } from "react";

function OtherBookDetails({ book }) {
    const { title, author, bookDetails, bookCondition } = book;

    // const [donor, setDonor] = useState(null);
    // useEffect(() => {
    //     const getDonor = async () => {
    //         const { data } = await getUser(book.donatedBy);
    //         setDonor(data);
    //     };
    //     getDonor();
    // }, [book.donatedBy]);

    const email = "abc@gmail.com";
    const address = "Batanagar";

    // const { email, address } = donor;
    // console.log(address);

    return (
        <div class="bookdetails2">
            <form action="">
                <h1 style={{ "text-align": "center", color: "#d4911f" }}>
                    {title}
                </h1>
                <br />
                <h3 style={{ "text-align": "center", color: "#d4911f" }}>
                    {author}
                </h3>
                <br />
                <b>
                    <span class="bookdet" style={{ color: "#d4911f" }}>
                        Book Details :-
                    </span>
                </b>
                <div>{bookDetails}</div>
                <b>
                    <br />
                    <span class="bookdet" style={{ color: "#d4911f" }}>
                        Book Condition :-
                    </span>
                </b>
                <span>{bookCondition}</span>
                <b>
                    <br />
                    <b />
                    <span style={{ color: "#d4911f" }}>Email :-</span>
                </b>
                <span>{email}</span>
                <b>
                    <br />
                    <br />
                    <span style={{ color: "#d4911f" }}>Mobile Number :-</span>
                </b>
                <span>9564714174</span>

                <b>
                    <br />
                    <br />
                    <span style={{ color: "#d4911f" }}> Address :-</span>
                </b>
                <span>{address}</span>

                <br />
                <br />

                <input
                    type="submit"
                    value="Add To Wishlist"
                    class="btn"
                    style={{ "text-align": "center", margin: "1rem" }}
                />
                <input type="submit" value="Contact" class="btn" />
            </form>
            <br />
        </div>
    );
}

export default OtherBookDetails;
