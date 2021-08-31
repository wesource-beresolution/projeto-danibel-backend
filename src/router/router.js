const express = require("express");
const router = express.Router();

const getWallet = require("../controllers/wallets/get");
// const putWallet = require("../controllers/wallets/put");
// const delWallet = require("../controllers/wallets/delete");
// const postWallet = require("../controllers/wallets/post");

//wallet
router.use("/api", getWallet);
// router.use("/api", putWallet);
// router.use("/api", delWallet);
// router.use("/api", postWallet);
