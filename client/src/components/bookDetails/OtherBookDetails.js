import getUser from "../userRequests/getUser";
import { useEffect, useState } from "react";

function OtherBookDetails({ book }) {
    const { title, author, bookDetails, bookCondition } = book;

    const [donor, setDonor] = useState(null);
    useEffect(() => {
        const getDonor = async () => {
            setDonor(await getUser(book.donatedBy));
        };
        getDonor();
    }, [book.donatedBy]);

    let email = "Not Provided";
    let address = "Unknown";
    let phone = "Not Provided";

    if (donor) {
        email = donor.email;
        address = donor.address;
        phone = donor.phone;
    }

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
                <span>{phone}</span>

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
