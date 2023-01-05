const fs = require("fs/promises");
const { buscarEndereco } = require("utils-playground");

const getAdress = async (req, res) => {
    const { cep } = req.params;

    try {
        const adressesJson = await fs.readFile("./src/data/adresses.data.json");
        const adresses = JSON.parse(adressesJson);

        const foundAdress = adresses.find((adress) => {
            return adress.cep.replace("-", "") === cep;
        })

        if (foundAdress) {
            return res.status(200).json(foundAdress);
        }

        const adressFunc = await buscarEndereco(cep);

        if (adressFunc.erro) {
            return res.status(404).json({ "mensagem": "Não foi encontrado endereço para este cep!" });
        }

        adresses.push(adressFunc);

        await fs.writeFile("./src/data/adresses.data.json", JSON.stringify(adresses));

        return res.status(200).json(adressFunc);

    } catch (error) {
        return res.status(error.response.status).json(error.message);
    }

}

module.exports = {
    getAdress
}