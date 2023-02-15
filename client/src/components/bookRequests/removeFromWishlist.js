import axios from "axios";
import { getToken, headers } from "../../hook/useLogin";
import { promiseToast } from "../../hook/useToast";
import getUser from "../userRequests/getUser";

const RemoveFromWishlist = book => {
    promiseToast(handleRemove(book._id), "Removed from Wishlist");
};

const handleRemove = async book_id => {
    const user = await getUser(getToken()._id);
    await axios.delete(`http://localhost:3030/wishlists/${user.wishlist}`, {
        book: book_id,
    });
};

export default RemoveFromWishlist;
