const disjuntores = [false, false, false, false, false, false, false, false];

console.log("Os dijuntores que estão ligados são:");

let existeDijuntorLigado = false;

for (let i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i]) {
        existeDijuntorLigado = true;
        console.log(i);
    }
}

if (!existeDijuntorLigado) {
    console.log("Todos estão desligados.")
}





