const { ReqBook } = require("../models/reqBook");
const path = require("path");

const getAllReqBooks = async (req, res) => {
    res.send(await ReqBook.find());
};
const getReqBook = async (req, res) => {
    const reqBook = await ReqBook.findOne({ _id: req.params.id });
    if (!reqBook) return res.status(404).send("ReqBook Not Found!");
    res.send(reqBook);
};

const postReqBook = async (req, res) => {
    const reqBook = new ReqBook({
        title: req.body.title,
        author: req.body.author,
        requestedBy: req.user._id,
        requestedOn: Date.now(),
    });

    await reqBook.save();
    res.send(reqBook);
};

const deleteReqBook = async (req, res, next) => {
    const reqBook = await ReqBook.findByIdAndRemove(req.params.id);
    res.send(reqBook);
};

const updateReqBook = async (req, res) => {
    const reqBook = await ReqBook.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.send(await reqBook.save());
};

module.exports = {
    getAllReqBooks,
    getReqBook,
    postReqBook,
    deleteReqBook,
    updateReqBook,
};
