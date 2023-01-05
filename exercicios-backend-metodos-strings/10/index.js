const nomeArquivo = 'Foto da Familia.png';

function validarArquivos(nomeArquivo) {
    let arrayNomeArquivo = nomeArquivo.split(" ");
    let ultimoNome = arrayNomeArquivo[arrayNomeArquivo.length - 1];

    if (ultimoNome.slice(-4) === ".jpg" || ultimoNome.slice(-4) === ".gif" || ultimoNome.slice(-4) === ".png" || ultimoNome.slice(-5) === ".jpeg") {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido");
    }
}

validarArquivos(nomeArquivo);
