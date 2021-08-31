require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./router/router");
const port = process.env.REST_API_PORT;

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Aplicação Criada na porta: ${port}`);
});
