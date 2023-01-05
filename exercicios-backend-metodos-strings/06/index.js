const celular = 99918888;

function formatarNumeroCelular(celular) {
    let stringCelular = celular.toString();
    let primeiraParteNumero = stringCelular.slice(0, 2);
    let segundaParteNumero = stringCelular.slice(2, 3);
    let terceiraParteNumero = stringCelular.slice(3, 7);
    let quartaParteNumero = stringCelular.slice(7)
    if (stringCelular.length === 11 && stringCelular[2] == 9) {
        let celularFormatado = primeiraParteNumero.padStart(3, "(").padEnd(4, ")") + " " + segundaParteNumero + " " + terceiraParteNumero + "-" + quartaParteNumero;
        console.log(celularFormatado);
    } else if (stringCelular.length === 10) {
        terceiraParteNumero = stringCelular.slice(3, 6)
        quartaParteNumero = stringCelular.slice(6)
        let celularFormatado = primeiraParteNumero.padStart(3, "(").padEnd(4, ")") + " " + "9" + " " + segundaParteNumero + terceiraParteNumero + "-" + quartaParteNumero;
        console.log(celularFormatado);
    } else if (stringCelular.length === 9 && stringCelular[0] == 9) {
        segundaParteNumero = stringCelular.slice(1, 5);
        terceiraParteNumero = stringCelular.slice(5)
        let celularFormatado = stringCelular[0] + " " + segundaParteNumero + "-" + terceiraParteNumero
        console.log(celularFormatado);
    } else if (stringCelular.length === 8) {
        segundaParteNumero = stringCelular.slice(0, 4);
        terceiraParteNumero = stringCelular.slice(4);
        let celularFormatado = "9" + " " + segundaParteNumero + "-" + terceiraParteNumero
        console.log(celularFormatado);
    } else {
        console.log("Número inválido")
    }

}

formatarNumeroCelular(celular);