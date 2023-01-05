//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 5150000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 59;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1800000000;

if (rendaMensalEmCentavos >= 200000 && mesesDecorridos <= 60 && totalJaPagoPeloAluno <= 1800000) {
    let valorParcelaReais = (rendaMensalEmCentavos * 0.18) / 100;
    console.log(`O valor da parcela desse mês é R$ ${valorParcelaReais}`);
} else {
    if (rendaMensalEmCentavos < 200000 && mesesDecorridos <= 60 && totalJaPagoPeloAluno <= 1800000) {
        console.log("O valor da parcela desse mês é R$ 0. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000.");
    } else if (mesesDecorridos > 60 && totalJaPagoPeloAluno <= 1800000) {
        console.log("O valor da parcela desse mês é R$ 0. Nenhum valor é devido pois já se decorreram mais de 60 meses após o término do curso.");
    } else if (totalJaPagoPeloAluno > 1800000) {
        console.log("O valor da parcela desse mês é R$ 0. Nenhum valor é devido pois o estudante já pagou toda a dívida.");
    }
}
