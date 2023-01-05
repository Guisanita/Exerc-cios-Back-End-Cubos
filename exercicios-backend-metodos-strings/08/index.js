const cpf = "011.0-22.0.33-44";

function tirandoPontuacao(documento) {
    let documentoSemPontuacao = documento.replaceAll(".", "").replaceAll("-", "");
    console.log(documentoSemPontuacao);
}

tirandoPontuacao(cpf);