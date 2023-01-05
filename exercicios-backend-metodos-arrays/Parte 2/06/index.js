const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

function imprimirCidadesComAteOitoLetras(arrayCidades) {

    const cidades = arrayCidades.filter((cidade) => {
        return cidade.length < 9

    });

    let cidadesForaArray = cidades[0];
    for (let i = 1; i < cidades.length; i++) {
        cidadesForaArray = cidadesForaArray + ", " + cidades[i]
    }

    console.log(cidadesForaArray);
};

imprimirCidadesComAteOitoLetras(cidades);