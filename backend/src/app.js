const express = require("express");
const cors = require("cors");
const router = require("./router.js");

const app = express();

// Informamos que nossa API consegue trabalahr com dados em JSON
app.use(express.json());

// Libera API para uso (nesse caso para geral)
app.use(cors())

// Informamos ao app usar sempre o router para todas as requisições
app.use(router);
module.exports = app;
