const express = require("express");
const admin = require("../controller/permission/admin");
const router = express.Router();

const {
    getAllReviews,
    getReview,
    deleteReview,
    postReview,
    updateReview,
} = require("../controller/reviews");

router.get("/", getAllReviews);
router.get("/:id", getReview);
router.post("/", postReview);
router.put("/:id", updateReview);
router.delete("/:id", [admin], deleteReview);

module.exports = router;
