require("dotenv").config();

const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.MONGOOSE_LOGIN}:${process.env.MONGOOSE_PASSWORD}@${process.env.MONGOOSE_INSTANCE}/${process.env.MONGOOSE_DATABASE}?${process.env.MONGOOSE_PERMISSION}`;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const db = mongoose.connect(uri, options);

module.exports = db;
