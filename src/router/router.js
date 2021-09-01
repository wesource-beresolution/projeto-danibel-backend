const express = require("express");
const router = express.Router();

const postUser = require("../controllers/users/post");
const getUser = require("../controllers/users/get");
const putUser = require("../controllers/users/put");
const deleteUser = require("../controllers/users/delete");

router.post("/register", postUser);
router.get("/user/:id?", getUser);
router.put("/user/:id", putUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
