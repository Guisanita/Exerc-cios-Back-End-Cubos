const express = require("express");
const { getAccounts, postAccount, updateAccount, deleteAccount, getBankBalance, getBankStatement } = require("../controllers/account.Controller");
const validatePasswordBank = require("../middlewares/bankAccounts.Middlewares");
const { validateAllDataInBody, validateDatainQuery, validateAccountPasswordInQuery } = require("../middlewares/account.middlwares");
const { validateAccountPasswordInBody } = require("../middlewares/account.middlwares");

const accountRoutes = express();

accountRoutes.get("/contas", validatePasswordBank, getAccounts);
accountRoutes.post("/contas", validateAllDataInBody, postAccount);
accountRoutes.put("/contas/:numeroConta/usuario", validateAccountPasswordInBody, validateAllDataInBody, updateAccount);
accountRoutes.delete("/contas/:numeroConta", deleteAccount);
accountRoutes.get("/contas/saldo", validateAccountPasswordInQuery, validateDatainQuery, getBankBalance);
accountRoutes.get("/contas/extrato", validateAccountPasswordInQuery, validateDatainQuery, getBankStatement);

module.exports = accountRoutes;