const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let indice = 0;
let nomesComA = [];

while (indice < nomes.length) {
    let nome = nomes[indice].toLowerCase();
    if (nome[0] == "a") {
        nomesComA.push(nomes[indice]);
        indice++
    } else {
        indice++
    }
}

console.log(nomesComA);
