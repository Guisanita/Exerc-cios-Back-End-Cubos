const jogadores = require("../bancoDeDados");

let indexJogadores = 0;

const descobrirVezJogar = (req, res) => {

    let jogador = jogadores[indexJogadores];

    if (indexJogadores < jogadores.length - 1) {
        indexJogadores++;
    } else {
        indexJogadores = 0;
    }


    res.send(` É a vez de ${jogador} jogar`);

}

const removerJogador = (req, res) => {
    const { indice } = req.query;

    if (!indice) {
        return res.send("Favor inserir o indice do jogador que deseja excluir.")
    }
    if (indice > jogadores.length - 1) {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
        return
    }

    jogadores.splice(indice, 1);

    res.send(jogadores);

}

const adicionarJogador = (req, res) => {
    const { nome, indice } = req.query;

    if (!nome) {
        return res.send(`Ao menos o nome é obrigatório para adicionar o jogador`);
    }

    const nomePadrao = nome[0].toUpperCase() + nome.slice(1).toLowerCase();

    if (!indice) {
        jogadores.push(nomePadrao);
    } else if (indice > jogadores.length - 1) {
        return res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`)
    } else {
        jogadores.splice(indice, 0, nomePadrao);
    }

    return res.send(jogadores);

}


module.exports = {
    descobrirVezJogar,
    removerJogador,
    adicionarJogador
}