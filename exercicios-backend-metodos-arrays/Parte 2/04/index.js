const numeros = [0, 122, 4, 6, 8, 44];

function validandoArray(array) {
    const verificacao = array.every((elementoArray) => {
        return elementoArray % 2 === 0;
    })

    if (verificacao) {
        console.log("array válido");
    } else {
        console.log("array inválido");
    }
}

validandoArray(numeros);

