const letras = ["A", "a", "B", "C", "E", "e"];

let indice = 0;
let soma = 0;

while (indice < letras.length) {
    let letrasLowerCase = letras[indice].toLowerCase()
    if (letrasLowerCase !== "e") {
        indice++;
    } else {
        soma = soma + 1;
        indice++;
    }
}

if (soma === 0) {
    console.log("Nenhuma letra \"E\" ou \"e\" foi encontrada.");
} else if (soma === 1) {
    console.log("Foi encontrada 1 letra \"E\" ou \"e\".");
} else {
    console.log(`Foram encontradas ${soma} letras \"E\" ou \"e\".`);
}

