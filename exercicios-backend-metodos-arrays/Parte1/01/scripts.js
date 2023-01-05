const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function ordenarContrarioEJuntar(array) {
    const modificarArray = array.reverse().join(", ")

    console.log(modificarArray);
}

ordenarContrarioEJuntar(frutas);