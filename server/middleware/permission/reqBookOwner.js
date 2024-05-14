const { ReqBook } = require("../../models/ReqBook");

module.exports = async (req, res, next) => {
    const reqBook = await ReqBook.findById(req.params.id);
    if (!reqBook) return res.status(404).json({ message: "Book Not Found!" });

    if (req.user.isAdmin || req.user._id === reqBook.requestedBy.toHexString())
        next();
    else
        return res
            .status(403)
            .json({ message: "You don't have any authority for this action!" });
};
