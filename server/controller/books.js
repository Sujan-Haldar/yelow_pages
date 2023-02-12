const { Book } = require("../models/book");

const getAllBooks = async (req, res) => {
    res.send(await Book.find());
};

const getBook = async (req, res) => {
    const book = await Book.findOne({ _id: req.params.id });
    if (!book) return res.status(404).send("Book Not Found!");
    res.send(book);
};

const postBook = async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
        bookDetails: req.body.bookDetails,
        bookCondition: req.body.bookCondition,
        donatedBy: req.user._id,
    });

    if (req.files) book.previewImgSrc = req.files[0].filename;

    await book.save();
    res.send(book);
};

const deleteBook = async (req, res) => {
    const book = await Book.findByIdAndRemove(req.params.id);
    res.send(book);
};

const updateBook = async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.send(await book.save());
};

module.exports = {
    getAllBooks,
    getBook,
    postBook,
    deleteBook,
    updateBook,
};
