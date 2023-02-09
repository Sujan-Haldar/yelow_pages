const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const books = require("./routes/books");
const users = require("./routes/users");
const wishlists = require("./routes/wishlists");
const reviews = require("./routes/reviews");

//Internal imports
const {
    notFoundError,
    errorHandelar,
} = require("./middleware/common/errorHandelar");

//express app
const app = express();
app.use(cors());
app.use(cookieParser());

//Env configaration
dotenv.config();
//Database connection
mongoose
    .connect(process.env.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database connection sucessfull"))
    .catch(err => console.log(err));

//Request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//

//

//

//

//Routing setup
app.get("/", (req, res) => res.send("SERVER RUNNING.............."));
// app.get("/", (req, res) => console.log(req.cookies));
app.use("/books", books);
app.use("/users", users);
app.use("/wishlists", wishlists);
app.use("/reviews", reviews);

//

//

//

//not found error
app.use(notFoundError);
//common error handelar
app.use(errorHandelar);

app.listen(process.env.PORT, () =>
    console.log(`Yellow Pages listening on port ${process.env.PORT}!`)
);
