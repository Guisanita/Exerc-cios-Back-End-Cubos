const express = require("express");
const { listarImoveis, listarUmImovel } = require("../controllers/imoveis");

const routes = express();

routes.get("/imoveis", listarImoveis);
routes.get("/imoveis/:id", listarUmImovel);

module.exports = routes;

