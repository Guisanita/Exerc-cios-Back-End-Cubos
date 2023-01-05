//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    let valorFinal = ((valorDoProduto - (valorDoProduto * 0.05)) / 100).toFixed(2);
    console.log(`Valor a ser pago: R$ ${valorFinal}`);
} else if (tipoDePagamento === "cheque") {
    let valorFinal = ((valorDoProduto - (valorDoProduto * 0.03)) / 100).toFixed(2);
    console.log(`Valor a ser pago: R$ ${valorFinal}`);
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    let valorFinal = ((valorDoProduto - (valorDoProduto * 0.10)) / 100).toFixed(2);
    console.log(`Valor a ser pago: R$ ${valorFinal}`);
}

