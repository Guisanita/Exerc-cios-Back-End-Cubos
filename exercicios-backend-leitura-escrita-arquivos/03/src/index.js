const express = require("express");
const routes = require("./routes/adresses.routes");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);