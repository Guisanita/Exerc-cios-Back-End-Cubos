const ladoA = 6;
const ladoB = 6;

//seu código aqui

if (ladoA === ladoB) {
    if (ladoA === 0) {
        console.log(`Lado A: ${ladoA};` + "\n" + `Lado B: ${ladoB}` + "\n" + "SIM, é bucha de Branco");
    } else if (ladoA === 1) {
        console.log(`Lado A: ${ladoA};` + "\n" + `Lado B: ${ladoB}` + "\n" + "SIM, é bucha de Ás");
    } else if (ladoA === 2) {
        console.log(`Lado A: ${ladoA};` + "\n" + `Lado B: ${ladoB}` + "\n" + "SIM, é bucha de Duque");
    } else if (ladoA === 3) {
        console.log(`Lado A: ${ladoA};` + "\n" + `Lado B: ${ladoB}` + "\n" + "SIM, é bucha de Terno");
    } else if (ladoA === 4) {
        console.log(`Lado A: ${ladoA};` + "\n" + `Lado B: ${ladoB}` + "\n" + "SIM, é bucha de Quadra");
    } else if (ladoA === 5) {
        console.log(`Lado A: ${ladoA};` + "\n" + `Lado B: ${ladoB}` + "\n" + "SIM, é bucha de Quina");
    } else if (ladoA === 6) {
        console.log(`Lado A: ${ladoA};` + "\n" + `Lado B: ${ladoB}` + "\n" + "SIM, é bucha de Sena");
    }

} else {
    console.log(`Lado A: ${ladoA};` + "\n" + `Lado B: ${ladoB}` + "\n" + "NÃO é bucha");
}