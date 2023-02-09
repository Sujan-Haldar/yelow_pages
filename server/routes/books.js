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

router.get("/", getAllBooks);
router.get("/:id", getBook);
router.post("/", [auth], postBook);
router.put("/:id", [auth], updateBook);
router.delete("/:id", [auth], deleteBook);

module.exports = router;
