const express = require("express");
const { getAdress } = require("../controllers/adresses.controllers");

const routes = express();

routes.get("/enderecos/:cep", getAdress);


module.exports = routes