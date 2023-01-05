const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

function descobrirNumerosPositivos(arrayNumeros) {
    const numerosPositivos = arrayNumeros.filter((numero) => {
        return numero > 0;
    })

    console.log(numerosPositivos);
}

descobrirNumerosPositivos(numeros);