const express = require("express");
const accountRoutes = require("./routes/account.Routes");
const transactionRoutes = require("./routes/transaction.Routes");

const app = express();

app.use(express.json());
app.use(accountRoutes);
app.use(transactionRoutes);

app.listen(3000);