const { Review } = require("../models/review");

const getAllReviews = async (req, res) => {
    res.send(await Review.find());
};

const getReview = async (req, res) => {
    const review = await Review.findOne({ _id: req.params.id });
    if (!review) return res.status(404).send("Review Not Found!");
    res.send(review);
};

const postReview = async (req, res) => {
    try {
        const review = new Review({
            user: req.body.user,
            content: req.body.content,
        });

        await review.save();
        res.send(review);
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const deleteReview = async (req, res) => {
    const review = await Review.findByIdAndRemove(req.params.id);
    res.send(review);
};

const updateReview = async (req, res) => {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.send(await review.save());
};

module.exports = {
    getAllReviews,
    getReview,
    postReview,
    deleteReview,
    updateReview,
};
