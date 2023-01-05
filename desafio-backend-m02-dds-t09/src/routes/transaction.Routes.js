const express = require("express");
const { deposit, withdraw, transfer } = require("../controllers/transaction.Controller");
const { validateJustAccountPassword, validateTwoAccountsPassword, } = require("../middlewares/transactions.Middlewares");

const transactionRoutes = express();

transactionRoutes.post("/transacoes/depositar", deposit);
transactionRoutes.post("/transacoes/sacar", validateJustAccountPassword, withdraw);
transactionRoutes.post("/transacoes/transferir", validateTwoAccountsPassword, transfer);

module.exports = transactionRoutes;