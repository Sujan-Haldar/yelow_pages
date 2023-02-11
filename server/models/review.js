const mongoose = require("mongoose");
const yup = require("yup");

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

const validator = async review => {
    const schema = yup.object({
        content: yup.string().required().min(5).max(255),
    });

    return schema.validate(review).catch(err => err);
};

module.exports = { Review, validator };
