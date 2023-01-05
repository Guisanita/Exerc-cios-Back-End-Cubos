const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contador = 0;

app.get("/", (req, res) => {
    if (contador < jogadores.length) {
        res.send(jogadores[contador]);
        contador++
    } else if (contador >= jogadores.length) {
        contador = 0;
        res.send(jogadores[contador]);
        contador++
    }

})

app.listen(3000, () => {
    console.log("Inicializado na porta 3000");
})