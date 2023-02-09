const User = require("../models/user");
const Wishlist = require("../models/wishlist");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
    res.send(await User.find());
};

const getUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(404).send("User Not Found!");
    res.send(user);
};

const postUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user)
            return res.status(400).json({ message: "Email already used!" });
        const hash = await bcrypt.hash(req.body.password, 15);

        user = new User({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            phone: req.body.phone,
            password: hash,
            isAdmin: req.body.isAdmin,
            address: req.body.address,
            profilePicSrc: req.body.profilePicSrc,
        });

        const wishlist = new Wishlist({
            user: user._id,
        });

        user.wishlist = wishlist;

        await wishlist.save();
        await user.save();

        res.send(user);
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

const deleteUser = async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) return res.status(404).send("User Not Found!");
    await Wishlist.findByIdAndRemove(user.wishlist._id);
    res.send(user);
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!user) return res.status(404).send("User Not Found!");

        res.send(await user.save());
    } catch (err) {
        return res.status(400).send(err.message);
    }
};

module.exports = {
    getAllUsers,
    getUser,
    postUser,
    deleteUser,
    updateUser,
};
