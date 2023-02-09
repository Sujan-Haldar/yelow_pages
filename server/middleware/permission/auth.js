const jwt = require("jsonwebtoken");
const User = require("../../models/user");
require("dotenv").config();

module.exports = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(401).json({ message: "Login Required." });

    const decoded = jwt.verify(token, process.env.jwtSecretKey);

    req.user = decoded;
    next();
};
