const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

while (filaDeDentro.length < 5) {
    let primeiroDeFora = filaDeFora.shift();
    if (primeiroDeFora === undefined) {
        break
    }

    filaDeDentro.push(primeiroDeFora);
}

console.log(filaDeDentro);
console.log(filaDeFora);

