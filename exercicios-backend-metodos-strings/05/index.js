const numeroCartao = '1111222233334444';

function ocultarNumeroCartao(numeroCartao) {
    if (numeroCartao.length !== 16) {
        console.log("Numero cartão inválido")
    } else {
        let primeiraParteNumeroCartao = numeroCartao.slice(0, 4);
        let parteOcultaCartao = numeroCartao.slice(4, 12);
        let numeroModificado = "";
        for (let number of parteOcultaCartao) {
            number = "*";
            numeroModificado = numeroModificado + number
        }
        let terceiraParteCartao = numeroCartao.slice(12);
        let novoNumeroCartao = primeiraParteNumeroCartao + numeroModificado + terceiraParteCartao;
        console.log(novoNumeroCartao)
    }
}

ocultarNumeroCartao(numeroCartao);

