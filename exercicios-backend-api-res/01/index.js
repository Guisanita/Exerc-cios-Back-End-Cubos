const express = require("express");
const getPassword = require("./src/middlewares/middlewares");
const routes = require("./src/routes/alunos");

const app = express();

app.use(express.json());
app.use(getPassword);
app.use(routes);

app.listen(3000);