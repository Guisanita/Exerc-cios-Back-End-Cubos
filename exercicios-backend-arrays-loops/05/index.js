const original = [1, 4, 12, 21, 53, 88, 112];

let indice = 0
let outra = []

while (indice < original.length) {
    if (original[indice] % 2 == 0) {
        outra.push(original[indice]);
        indice++
    } else {
        indice++
    }
}

console.log(outra);