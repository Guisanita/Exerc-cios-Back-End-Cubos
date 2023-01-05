const nome = 'Guido Cerqueira';

function gerarNickname(nome) {
    let arrayNome = nome.split(" ");
    let nickname = "";
    for (let nome of arrayNome) {
        nickname = nickname + nome.toLowerCase();
    }
    nickname = "@" + nickname.slice(0, 12);
    console.log(nickname);
}

gerarNickname(nome);