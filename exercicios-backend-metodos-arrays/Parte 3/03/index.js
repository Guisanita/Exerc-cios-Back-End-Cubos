const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

function encontrarMaiorValor(arrayNumeros) {
    const maiorNumero = arrayNumeros.reduce((acumulador, numeroAtual) => {
        let maior = acumulador;
        if (numeroAtual > acumulador) {
            maior = numeroAtual;
        }
        return maior;
    })

    console.log(maiorNumero);
}

encontrarMaiorValor(numeros);