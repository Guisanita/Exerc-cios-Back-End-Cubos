//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 30000;

if (valorPago < valorDoProduto) {
    let valorParcelas = ((valorDoProduto / quantidadeDoParcelamento) / 100).toFixed(2);
    let quantidadeParcelasPagas = ((valorPago / valorParcelas) / 100).toFixed(2);
    let quantidadeParcelasHaPagar = quantidadeDoParcelamento - quantidadeParcelasPagas;
    console.log(`Restam ${quantidadeParcelasHaPagar} parcelas de R$${valorParcelas}.`);
} else {
    console.log("Você já pagou toda a compra");
}
