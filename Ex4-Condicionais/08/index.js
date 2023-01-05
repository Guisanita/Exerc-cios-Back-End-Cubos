const idade = 14;
const possuiPatologia = true;
const altura = 180;
const ehEstudante = false;

if (idade >= 12 && idade <= 65 && !possuiPatologia && altura >= 150) {
    if (ehEstudante || idade < 18) {
        console.log("10 reais");
    } else {
        console.log("20 reais")
    }
} else {
    console.log("ACESSO NEGADO");
}

