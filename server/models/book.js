const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
    donatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    previewImgSrc: {
        type: String,
        required: true,
        default: "https://pngimg.com/d/book_PNG2111.png",
    },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
