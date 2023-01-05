const express = require("express");
const { getBooks, getBook, addBook, replaceBook, chanceBook, deleteBook } = require("../controllers/books");

const routes = express();

routes.get("/livros", getBooks);
routes.get("/livros/:id", getBook);
routes.post("/livros", addBook);
routes.put("/livros/:id", replaceBook);
routes.patch("/livros/:id", chanceBook);
routes.delete("/livros/:id", deleteBook)

module.exports = routes;