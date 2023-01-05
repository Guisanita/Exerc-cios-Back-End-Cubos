const express = require("express");
const jogadores = require("./bancoDeDados");
const { descobrirVezJogar, removerJogador, adicionarJogador } = require("./controllers/jogadores");


const app = express();

app.get("/", descobrirVezJogar);
app.get("/remover", removerJogador);
app.get("/adicionar", adicionarJogador);


app.listen(8000);