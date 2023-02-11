const express = require("express");
const admin = require("../middleware/permission/admin");
const router = express.Router();
const auth = require("../middleware/permission/auth");
const reviewOwner = require("../middleware/permission/reviewOwner");

const {
    getAllReviews,
    getReview,
    deleteReview,
    postReview,
    updateReview,
} = require("../controller/reviews");

router.get("/", getAllReviews);
router.get("/:id", getReview);
router.post("/", [auth], postReview);
router.put("/:id", [auth, reviewOwner], updateReview);
router.delete("/:id", [auth, reviewOwner], deleteReview);

module.exports = router;
