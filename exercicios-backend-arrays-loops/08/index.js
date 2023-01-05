const numeros = [3, 24, 1, 8, 111, 7, 15];

while (numeros.length !== 1) {
    if (numeros[0] < numeros[numeros.length - 1]) {
        numeros.shift();
    } else {
        numeros.pop();
    }
}

console.log(numeros);


