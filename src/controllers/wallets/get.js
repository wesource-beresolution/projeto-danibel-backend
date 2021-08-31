const express = require("express");
const router = express.Router();

const Wallet = require("../../model/wallet");

router.get("/wallet/:id?", async (req, res) => {
  res.send({ success: "Creating get router for Wallet" });
});

module.exports = router;
