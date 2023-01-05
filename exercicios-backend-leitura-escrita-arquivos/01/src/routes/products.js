const express = require("express");
const { getProducts, getProduct, calculateShipping } = require("../controllers/products");

const routes = express();

routes.get("/produtos", getProducts);
routes.get("/produtos/:idProduto", getProduct);
routes.get("/produtos/:idProduto/frete/:cep", calculateShipping);


module.exports = routes;





















































