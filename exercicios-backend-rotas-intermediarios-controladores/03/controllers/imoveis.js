const imoveis = require("../data/imoveis")

const listarImoveis = (req, res) => {
    res.send(imoveis);
}

const listarUmImovel = (req, res) => {
    const { id } = req.params;

    const imovelEscolhido = imoveis.find((imovel) => {
        return imovel.id === Number(id);
    })

    if (!imovelEscolhido) {
        return res.send("Este imóvel não existe!");
    }

    return res.send(imovelEscolhido);

}


module.exports = {
    listarImoveis,
    listarUmImovel
}

