const express = require("express");
const router = express.Router();

const {
    getAllUsers,
    getUser,
    deleteUser,
    postUser,
    updateUser,
} = require("../controller/users");

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
