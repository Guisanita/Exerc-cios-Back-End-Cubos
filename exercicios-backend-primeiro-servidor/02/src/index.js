const express = require("express");

const app = express();

let minuto = 0;
let segundo = 0;
let pausar = false;

function contagem() {

    function contando() {
        if (segundo < 60) {
            segundo++
        } else {
            minuto++
            segundo = 0;
        }

        if (pausar) {
            clearInterval(id)
        }
    }
    const id = setInterval(contando, 1000);
}

app.get("/", (req, res) => {
    let minuto2Digitos = minuto.toString().padStart(2, "0");
    let segundo2Digitos = segundo.toString().padStart(2, "0");
    res.send(`Tempo atual do cronômetro: ${minuto2Digitos} minutos e ${segundo2Digitos} segundos`);
})

app.get("/iniciar", (req, res) => {
    pausar = false;
    contagem();
    res.send("Cronômetro iniciado!")
})

app.get("/pausar", (req, res) => {
    pausar = true;
    res.send("Cronômetro pausado!")
})

app.get("/continuar", (req, res) => {
    pausar = false;
    contagem();
    res.send("Cronômetro continuando!")
})

app.get("/zerar", (req, res) => {
    minuto = 0;
    segundo = 0;
    res.send("Cronômetro zerado!")
})


app.listen(8000, () => {
    console.log("Inicializado na porta 8000.");
})