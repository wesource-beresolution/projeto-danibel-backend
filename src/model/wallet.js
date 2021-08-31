const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const WalletSchema = mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  type: {
    type: String,
  },
  value: {
    type: Number,
  },
});

module.exports = mongoose.model("Wallet", WalletSchema);
