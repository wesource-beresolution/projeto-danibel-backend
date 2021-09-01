require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./router/router");
const port = process.env.REST_API_PORT;

const db = require("./database/config");

db.then(() => {
  console.log("Successful connection");
}).catch((e) => {
  console.log("Connection error");
});

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Application starts on port: ${port}`);
});
