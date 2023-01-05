function tabuada(arrayNumero, callback) {
    for (let numero of arrayNumero) {
        for (let i = 0; i <= 10; i++) {
            callback(`${numero} x ${i} = ${numero * i}`);
        }
        console.log("-----------------------");
    }
}

function imprimirResultado(resultado) {
    console.log(resultado);
}

tabuada([9, 5, 2], imprimirResultado);