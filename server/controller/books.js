const Book = require("../models/book");

const getAllBooks = async (req, res) => {
    res.send(await Book.find());
};

const getBook = async (req, res) => {
    const book = await Book.findOne({ _id: req.params.id });
    if (!book) return res.status(404).send("Book Not Found!");
    res.send(book);
};

const postBook = async (req, res) => {
    try {
        // const book = new Book({
        //     title: req.body.title,
        //     author: req.body.author,
        //     donatedBy: req.user._id,
        //     publishYear: req.body.publishYear,
        //     previewImgSrc: req.body.previewImgSrc,
        // });
        const book = new Book({
            ...req.body,
            previewImgSrc: req.files[0].filename,
        });

        await book.save();
        res.send(book);
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const deleteBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send("Book Not Found!");

    if (req.user.isAdmin || req.user._id === book.donatedBy.toHexString())
        await book.remove();
    else return res.status(403).json({ message: "Access Denied!" });

    res.send(book);
};

const updateBook = async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!book) return res.status(404).send("Book Not Found!");

    res.send(await book.save());
};

module.exports = {
    getAllBooks,
    getBook,
    postBook,
    deleteBook,
    updateBook,
};
