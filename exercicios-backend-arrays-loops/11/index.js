const original = [5, 7, 26, 34, 10];

let outraArray = []

for (let i = 0; i < original.length; i++) {
    if (original[i] >= 10 && original[i] <= 20 || original[i] > 100) {
        outraArray.push(original[i]);
    }
}

if (outraArray.length == 0) {
    console.log("Não há números com os parâmetros pedidosnesta array");
} else {
    console.log(outraArray);
}

