const { Book } = require("../models/book");
const { unlink } =  require("fs");
const {ReqBook} = require("../models/reqBook")
const {User} = require("../models/user")
const getAllBooks = async (req, res) => {
    res.send(await Book.find());
};
const {transporter, mailOptions, sendMail} = require("../utilities/sendMail")
const path = require("path")
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
        donatedOn: Date.now(),
    });

    if (req.files.length > 0) book.previewImgSrc = req.files[0].filename;

    await book.save();

    const requestedBookFindByTittle = await ReqBook.find({title : req.body.title});
    if(requestedBookFindByTittle){
        const userId = requestedBookFindByTittle[0].requestedBy;
        if(userId) {
            const user = await User.findById(userId);
            const email = user.email;
            const myTransporter = transporter();
            const myMailOptions = mailOptions(email,'Book is available',`your requested book is now available at ${process.env.MAIN_WEBSITE_URL}`);
            myTransporter.sendMail(myMailOptions, (err) => {
                if (err) {
                   return res.send(book);
                }
                return res.send(book);
              });
        }
    }

    res.send(book);
};

const deleteBook = async (req, res,next) => {
    const book = await Book.findByIdAndRemove(req.params.id);
    const {previewImgSrc} = book;
    if(previewImgSrc){
        if(!previewImgSrc.startsWith("https")){
            unlink(
                path.join(
                    __dirname,
                    `/../public/uploads/bookImage/${previewImgSrc}`
                ),
                err => {
                    if (err) next(err);
                }
            );
        }
    }
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
