let teste = "5 \n3.56 17 \n-5.1 36.3 \n0.0002 -2 \n5 5 \n-9.01 -17.7"


// let stringDistancias = teste.split("\n").slice(1);
// let maiorDistancia = Number.MIN_VALUE;
// for (let distancia of stringDistancias) {
//     for (let distancia2 of stringDistancias) {
//         let distanciaPontos = Math.sqrt((((distancia2[0]) - (distancia[0])) ** 2) + (((distancia2[2]) - (distancia[2])) ** 2));
//         if (distanciaPontos > maiorDistancia) {
//             maiorDistancia = distanciaPontos;
//         }
//     }

// }
// console.log(maiorDistancia);

let stringDistancias = teste.split("\n").slice(1);
let maiorDistancia = Number.MIN_VALUE;
// for (let distancia of stringDistancias) {
//     for (let distancia2 of stringDistancias) {
//         distancia = distancia.split(" ");
//         distancia2 = distancia2.split(" ");
//         let distanciaPontos = Math.sqrt((((Number(distancia2[0]) - Number(distancia[0]))) ** 2) + (((Number(distancia2[1]) - Number(distancia[1]))) ** 2));
//         if (distanciaPontos > maiorDistancia) {
//             maiorDistancia = distanciaPontos;
//         }
//     }

// }
console.log(stringDistancias);
let teste2 = stringDistancias[0].split(" ");
console.log(teste2);
console.log(teste2[0]);
console.log(teste2[1]);





