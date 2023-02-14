const { User } = require("../models/user");
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
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ message: "Email already used!" });

    const hash = await bcrypt.hash(req.body.password, 15);

    user = new User({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        password: hash,
        address: req.body.address,
        profilePicSrc:
            req.body.gender === "female"
                ? "https://img.favpng.com/5/1/21/computer-icons-user-profile-avatar-female-png-favpng-cqykKc0Hpkh65ueWt6Nh2KFvS.jpg"
                : "https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png",
    });

    const wishlist = new Wishlist({
        user: user._id,
    });

    user.wishlist = wishlist;

    await wishlist.save();
    await user.save();

    res.send(user);
};

const deleteUser = async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) return res.status(404).json({ message: "User Not Found!" });
    await Wishlist.findByIdAndRemove(user.wishlist._id);
    res.send(user);
};

const updateUser = async (req, res) => {
    if (req.user._id !== req.params.id) {
        return res
            .status(403)
            .json({ message: "You don't have any authority for this action!" });
    }

    let passwordChanged = false;
    if (!(await User.findOne({ password: req.body.password }))) {
        req.body.password = await bcrypt.hash(req.body.password, 15);
        passwordChanged = true;
    }

    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!user) return res.status(404).send("User Not Found!");

    res.json({
        data: user,
        message: passwordChanged ? "Password Updated!" : "Properties Updated!",
    });
};

module.exports = {
    getAllUsers,
    getUser,
    postUser,
    deleteUser,
    updateUser,
};
