let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

function formatarDados(identificador, nome, email) {
    let identificadorFormatado = identificador.padStart(6, "0");
    let nomeArray = nome.split(" ");
    let nomeFormatado = ""
    for (let nome of nomeArray) {
        let nomeloop = nome[0].toUpperCase() + nome.slice(1);
        nomeFormatado += nomeloop + " ";
    }
    let emailFormatado = email.trim().replaceAll(" ", "");

    console.log(identificadorFormatado);
    console.log(nomeFormatado.trim());
    console.log(emailFormatado);
}

formatarDados(identificador, nome, email);

