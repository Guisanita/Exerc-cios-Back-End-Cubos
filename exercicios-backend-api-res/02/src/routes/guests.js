const express = require("express");
const { getGuests, addGuest, deleteGuest } = require("../controllers/guests");

const routes = express();

routes.get("/convidados", getGuests);
routes.post("/convidados", addGuest);
routes.delete("/convidados/:nome", deleteGuest)


module.exports = routes;