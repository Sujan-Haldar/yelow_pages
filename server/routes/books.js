const express = require("express");
const router = express.Router();
const bookUpload = require("../middleware/book/bookUpload");
const auth = require("../middleware/permission/auth");
const bookOwner = require("../middleware/permission/bookOwner");

const {
    getAllBooks,
    getBook,
    deleteBook,
    postBook,
    updateBook,
} = require("../controller/books");

router.get("/", getAllBooks);
router.get("/:id", getBook);

//changed by Sujan
router.post("/", [auth], postBook);
// router.post("/", [auth, bookUpload], postBook);
//change by sujan

router.put("/:id", [auth, bookOwner], updateBook);
router.delete("/:id", [auth, bookOwner], deleteBook);

module.exports = router;
