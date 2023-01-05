let numeros = [8, 11, 4, 1];

// numero[0] - numero[1] - 0 + 1
// numero[0] - numero[2] - 0 + 2
// numero[0] - numero[3] - 0 + 3
// numero[1] - numero[0] - 1 - 1
// numero[1] - numero[2] - 1 + 1
// numero[1] - numero[3] - 1 + 2
// numero[2] - numero[0] - 2 - 2
// numero[2] - numero[1] = 2 - 1
// numero[2] - numero[3] = 2 + 2
// numero[3] - numero[0] = 3 -3
// numero[3] - numero[1] = 3 - 2
// numero[3] - numero[2] = 3 - 1

let difMaior = -Number.MAX_VALUE;

for (let x of numeros) {
    for (let y of numeros) {
        let difAtual = x - y;
        if (difAtual > difMaior) {
            difMaior = difAtual;
        }
    }
}

console.log(difMaior);








