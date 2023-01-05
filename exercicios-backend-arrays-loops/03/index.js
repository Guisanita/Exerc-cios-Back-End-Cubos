// const numeros = [54, 22, 14, 87, 10, 284];

// let indice = 0;
// let tem10 = false;

// while (indice < numeros.length) {
//     if (numeros[indice] !== 10) {
//         indice++
//     } else {
//         tem10 = true;
//         break
//     }
// }

// if (!tem10) {
//     console.log("Não existe nenhum 10 nesta array. Portanto: -1.")
// } else {
//     console.log(`Existe 10 na posição ${indice} desta array.`);
// }

// const numeros = [54, 22, 14, 10, 284, 10, 6];

// let indice = 0;
// let tem10 = false;

// while (indice < numeros.length) {
//     if (numeros[indice] !== 10) {
//         indice++;
//     } else {
//         console.log(`Existe 10 na posição ${indice} desta array.`);
//         tem10 = true;
//         indice++
//     }
// }

// if (!tem10) {
//     console.log("Não existe nenhum 10 nesta array. Portanto: -1.");
// }

const numeros = [54, 22, 14, 10, 284, 10, 6];

let tem10 = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == 10) {
        console.log(`Existe 10 na posição ${i} desta array.`);
        tem10 = true;
    }
} if (!tem10) {
    console.log("Não existe nenhum 10 nesta array. Portanto: -1.");
}
