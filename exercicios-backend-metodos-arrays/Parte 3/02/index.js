const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

function encontrarMaiorString(array) {
    const maiorString = array.reduce((acumulador, stringAtual) => {
        let maior = acumulador;
        if (stringAtual.length > acumulador.length) {
            maior = stringAtual;
        }
        return maior;
    })

    console.log(maiorString);
}

encontrarMaiorString(cidades);