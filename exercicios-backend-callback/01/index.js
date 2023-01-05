function tabuada(numero, callback) {
    for (let i = 0; i <= 10; i++) {
        callback(`${numero} x ${i} = ${numero * i}`);
    }

}

function imprimirResultado(resultado) {
    console.log(resultado);
}

tabuada(12, imprimirResultado);
