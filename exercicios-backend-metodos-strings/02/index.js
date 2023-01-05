const cpf = "12345678900";
const cnpj = "12345678900559";

if (cpf.length !== 11) {
    console.log("CPF Inválido.")
} else {
    let primeiroPonto = cpf.slice(0, 3);
    let segundoPonto = cpf.slice(3, 6);
    let traco = cpf.slice(6, 9);
    let restoString = cpf.slice(9);

    console.log(`${primeiroPonto}.${segundoPonto}.${traco}-${restoString}`);
}

if (cnpj.length !== 14) {
    console.log("CNPJ Inválido.")
} else {
    let primeiroPonto = cnpj.slice(0, 2);
    let segundoPonto = cnpj.slice(2, 5);
    let barra = cnpj.slice(5, 8);
    let traco = cnpj.slice(8, 12);
    let restoString = cnpj.slice(12);

    console.log(`${primeiroPonto}.${segundoPonto}.${barra}/${traco}-${restoString}`);
}

