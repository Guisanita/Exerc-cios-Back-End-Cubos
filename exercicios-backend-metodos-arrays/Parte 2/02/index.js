const palavras = ["livro", "sol", "carro"];

function validandoArray(arrayPalavras) {
    const validandoArrayPalavras = arrayPalavras.some((palavra) => {
        return palavra.length > 5;
    });

    if (validandoArrayPalavras) {
        console.log("existe palavra inválida");
    } else {
        console.log("array validado");
    }
}

validandoArray(palavras);