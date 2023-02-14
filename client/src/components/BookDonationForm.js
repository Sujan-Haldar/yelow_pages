// import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import donatebookLogo from "../image/donatebook.png";
import InputTypeFile from "./fromElement/InputTypeFile";
import InputTypeSelect from "./fromElement/InputTypeSelect";
import InputTypeSubmit from "./fromElement/InputTypeSubmit";
import InputTypeText from "./fromElement/InputTypeText";
import mainSubmitForm from "../hook/useForm";
import { headers } from "../hook/useLogin";

function BookDonationForm() {
    const [bookName, setBookName] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [bookDetails, setBookDetails] = useState("");
    const [bookCondition, setBookCondition] = useState("Poor");
    const [publishYear, setPublishYear] = useState(null);
    const [bookImg, setBookImg] = useState(null);

    const submitForm = e => {
        e.preventDefault();
        const header = headers();
        header["Content-Type"] = "multipart/form-data";

        const formData = new FormData();
        formData.append("title", bookName);
        formData.append("author", authorName);
        formData.append("publishYear", publishYear);
        formData.append("bookCondition", bookCondition);
        formData.append("bookDetails", bookDetails);
        formData.append("file", bookImg);
        mainSubmitForm("http://localhost:3030/books", formData, true, header);

        <Navigate to="/" />;
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
                <h3>Donate Books</h3>
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

                <InputTypeText
                    inputName="Book Details"
                    type="text"
                    placeholder="Enter book details"
                    required={true}
                    id=""
                    value={bookDetails}
                    setValue={setBookDetails}
                />

                <InputTypeText
                    inputName="Publish Year"
                    type="text"
                    placeholder="Publish year"
                    required={true}
                    id=""
                    value={publishYear}
                    setValue={setPublishYear}
                />

                <InputTypeSelect
                    value={bookCondition}
                    setValue={setBookCondition}
                />

                <InputTypeFile setBookImg={setBookImg} />

                {/* <PreviewImage file = {URL.createObjectURL(bookImg)}/> */}
                <InputTypeSubmit value="Donate" />
            </form>
        </div>
    );
}

export default BookDonationForm;
