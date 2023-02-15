import axios from "axios";
import { getToken } from "../../hook/useLogin";
import { promiseToast } from "../../hook/useToast";
import getUser from "../userRequests/getUser";

const AddToWishlist = book => {
    promiseToast(handleUpdateWishlist(book), "Added to Wishlist");
};

const handleUpdateWishlist = async book => {
    const user = await getUser(getToken()._id);
    if (book.donatedBy === user._id)
        return Promise.reject("You Can't Add Your Own Book to Wishlist!");
    await axios.put(`http://localhost:3030/wishlists/${user.wishlist}`, {
        book: book._id,
    });
};

export default AddToWishlist;
