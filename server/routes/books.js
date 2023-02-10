const express = require("express");
const router = express.Router();
const auth = require("../middleware/permission/auth");
const admin = require("../middleware/permission/admin");
const {
    getAllBooks,
    getBook,
    deleteBook,
    postBook,
    updateBook,
} = require("../controller/books");
const bookUpload = require("../middleware/book/bookUpload");

router.get("/", getAllBooks);
router.get("/:id", getBook);

//changed by Sujan
// router.post("/", [auth], postBook);
router.post("/",bookUpload, postBook);
//change by sujan

router.put("/:id", [auth], updateBook);
router.delete("/:id", [auth], deleteBook);

module.exports = router;
