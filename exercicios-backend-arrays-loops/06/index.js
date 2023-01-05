const numeros = [3, 2, 7, 7, 1, 2, 5, 10];

let indice = 0
let soma = 0

while (indice < numeros.length) {
    if (numeros[indice] % 2 == 0) {
        soma = soma + numeros[indice];
        indice++
    } else {
        indice++
    }
}

if (soma == 0) {
    console.log("Não existe numeros pares nesta array");
} else {
    console.log(`A soma dos números pares desta array é ${soma}.`);
}


