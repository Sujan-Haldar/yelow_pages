const express = require("express");
const router = express.Router();

const {
    getAllBooks,
    getBook,
    deleteBook,
    postBook,
    updateBook,
} = require("../controller/books");

router.get("/", getAllBooks);
router.get("/:id", getBook);
router.post("/", postBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
