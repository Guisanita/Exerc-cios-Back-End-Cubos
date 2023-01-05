const express = require("express");
const { getAlunos, getAluno, addStudent, deleteStudent } = require("../controllers/alunos")


const routes = express();

routes.get("/alunos", getAlunos);
routes.get("/alunos/:id", getAluno);
routes.post("/alunos", addStudent);
routes.delete("/alunos/:id", deleteStudent)

module.exports = routes