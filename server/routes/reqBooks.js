const express = require("express");
const router = express.Router();
const auth = require("../middleware/permission/auth");
// const reqBookOwner = require("../middleware/permission/reqBookOwner");
const { validator } = require("../models/reqBook");
const validateBody = require("../middleware/common/validateBody");

const {
    getAllReqBooks,
    getReqBook,
    deleteReqBook,
    postReqBook,
    updateReqBook,
} = require("../controller/reqBooks");

router.get("/", getAllReqBooks);
router.get("/:id", getReqBook);

// Using Default ReqBook Preview Image
// router.post("/", [auth, validateBody(validator)], postReqBook);

// For Custom ReqBook Preview Image Upload
router.post("/", [auth, validateBody(validator)], postReqBook);

router.put("/:id", [auth, validateBody(validator)], updateReqBook);
router.delete("/:id", [auth], deleteReqBook);

module.exports = router;
