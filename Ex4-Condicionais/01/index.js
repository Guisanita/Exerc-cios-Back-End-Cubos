const jogada1 = "papel"
const jogada2 = "pedra"

//seu código aqui
/* Possibilidades: 
pedra - pedra - Testado
pedra -tesoura - Testado
pedra - papel - Testado
tesoura - tesoura - Testado
tesoura - papel - Testado
tesoura - pedra - Testado
papel - papel - Testado
papel - tesoura - Testado
papel - pedra - 
*/

if (jogada1 === jogada2) {
    console.log(`Jogador 1: ${jogada1};` + "\n" + `Jogador 2: ${jogada2}.` + "\n" + "Portanto: EMPATE.");
} else if (jogada1 === "pedra") {
    if (jogada2 === "tesoura") {
        console.log(`Jogador 1: ${jogada1};` + "\n" + `Jogador 2: ${jogada2}.` + "\n" + "Portanto: Jogador 1 Vencedor.");
    } else {
        console.log(`Jogador 1: ${jogada1};` + "\n" + `Jogador 2: ${jogada2}.` + "\n" + "Portanto: Jogador 2 vencedor.");
    }
} else if (jogada1 === "tesoura") {
    if (jogada2 === "papel") {
        console.log(`Jogador 1: ${jogada1};` + "\n" + `Jogador 2: ${jogada2}.` + "\n" + "Portanto: Jogador 1 Vencedor.");
    } else {
        console.log(`Jogador 1: ${jogada1};` + "\n" + `Jogador 2: ${jogada2}.` + "\n" + "Portanto: Jogador 2 vencedor.");
    }
} else if (jogada1 === "papel") {
    if (jogada2 === "pedra") {
        console.log(`Jogador 1: ${jogada1};` + "\n" + `Jogador 2: ${jogada2}.` + "\n" + "Portanto: Jogador 1 Vencedor.");
    } else {
        console.log(`Jogador 1: ${jogada1};` + "\n" + `Jogador 2: ${jogada2}.` + "\n" + "Portanto: Jogador 2 vencedor.")
    }
}