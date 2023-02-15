import axios from "axios";
import getUser from "../userRequests/getUser";
import getAllBooks from "./getAllBooks";

const getWishlistBooks = async user_id => {
    if (!user_id) return [];
    const user = await getUser(user_id);
    const { data: allBooks } = await getAllBooks();
    const { data: wishlist } = await axios.get(
        `http://localhost:3030/wishlists/${user.wishlist}`
    );
    return allBooks.filter(book => wishlist.books.includes(book._id));
};

export default getWishlistBooks;
