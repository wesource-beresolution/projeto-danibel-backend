const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
