const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const login = async (req, res) => {
    const { username, password } = req.body;
    const maxAge = 3 * 60 * 60;

    if (!username || !password)
        return res.status(400).send("Username or Password not present!");

    const user = await User.findOne({ email: username });
    if (!user) return res.status(400).send("User not found!");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).send("Wrong Password!");

    const payload = { id: user._id, isAdmin: user.isAdmin };
    const token = jwt.sign(payload, process.env.jwtSecretKey, {
        expiresIn: maxAge,
    });
    res.cookie("usertoken", token, { maxAge: maxAge * 1000 });

    res.status(200).json({ message: "User Logged in Successfully." });
};

module.exports = login;
