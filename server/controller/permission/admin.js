const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
    const key = process.env.jwtSecretKey;
    const token = req.cookies.usertoken;

    if (!token) return res.status(401).send("User is not Logged in!");

    const decoded = jwt.verify(token, key);
    console.log(decoded);
    next();
};
