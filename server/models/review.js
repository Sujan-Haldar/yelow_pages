const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    content: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    publishedTime: {
        type: Date,
        required: true,
        default: new Date(),
    },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
