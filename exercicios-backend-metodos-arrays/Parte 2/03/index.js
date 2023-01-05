const palavras = ["arroz", "feijão", "carne", "vodka", "macarrão"];

function validarListaMercado(listaMercado) {
    const verificarLista = listaMercado.some((item) => {
        return item === "cerveja" || item === "vodka";
    });

    if (verificarLista) {
        console.log("Revise sua lista, joão. Possui bebida com venda proibida!");
    } else {
        console.log("Tudo certo, vamos as compras!");
    }
}

validarListaMercado(palavras);