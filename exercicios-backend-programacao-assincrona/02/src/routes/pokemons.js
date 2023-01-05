const express = require("express");
const { getPokemons, getPokemon } = require("../controllers/pokemons");

const routes = express();

routes.get("/pokemon", getPokemons);
routes.get("/pokemon/:parPkm", getPokemon);

module.exports = routes;