const mongoose = require("mongoose");
const yup = require("yup");

const reqBookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
    },
    author: {
        type: String,
        required: true,
    },
    requestedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        requred: true,
    },
    requestedOn: {
        type: Date,
        require: true,
    },
    previewImgSrc: {
        type: String,
        required: true,
        default: "https://pngimg.com/d/reqBook_PNG2111.png",
    },
});

const ReqBook = mongoose.model("ReqBook", reqBookSchema);

const validator = async reqBook => {
    const schema = yup.object({
        title: yup.string().required().min(1).max(255),
        author: yup.string().required().min(2).max(255),
    });

    return schema.validate(reqBook).catch(err => err);
};

module.exports = { ReqBook, validator };
