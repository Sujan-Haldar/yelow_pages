import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { headers } from "../hook/useLogin";
import donatebookLogo from "../image/donatebook.png";
import InputTypeSubmit from "./fromElement/InputTypeSubmit";
import InputTypeText from "./fromElement/InputTypeText";
function BookRequestForm() {
    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    // const navigate = useNavigate();
    const toastId = useRef(null);
    const submitForm = e => {
        toastId.current = toast.loading("Please Wait...")
        e.preventDefault();
        const header = headers();
        const data = {
            tittle : bookName,
            author : authorName
        }
        console.log(data)
        // mainSubmitForm(
        //     `${process.env.REACT_APP_API_URL}/books`,
        //     data,
        //     true,
        //     header,toastId
        // ).then(({ data }) => {
        //     // navigate(getBookPageLink(data));
        // });
    };

    return (
        <div className="login-form-container">
            <form action="" onSubmit={submitForm}>
                <img
                    src={donatebookLogo}
                    alt="Check your internet"
                    width="100px"
                    style={{ display: "block", margin: "auto" }}
                />
                <h3>Request for Books</h3>
                <br />

                <InputTypeText
                    inputName="Book Name"
                    type="text"
                    placeholder="Enter Book name"
                    required={true}
                    id=""
                    value={bookName}
                    setValue={setBookName}
                />

                <InputTypeText
                    inputName="Author Name"
                    type="text"
                    placeholder="Enter author name"
                    required={true}
                    id=""
                    value={authorName}
                    setValue={setAuthorName}
                />
                <InputTypeSubmit value="Request" />
            </form>
        </div>
    );
}

export default BookRequestForm;
