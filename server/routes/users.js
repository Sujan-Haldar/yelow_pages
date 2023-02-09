const express = require("express");
const router = express.Router();

const {
    getAllUsers,
    getUser,
    deleteUser,
    postUser,
    updateUser,
} = require("../controller/users");
const admin = require("../middleware/permission/admin");
const auth = require("../middleware/permission/auth");

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.put("/:id", [auth], updateUser);
router.delete("/:id", [auth, admin], deleteUser);

module.exports = router;
