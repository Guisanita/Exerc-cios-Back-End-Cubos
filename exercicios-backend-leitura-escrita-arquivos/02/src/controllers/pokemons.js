const { listarPokemons, detalharPokemon } = require("utils-playground");

const getPokemons = async (req, res) => {
    const { pagina } = req.query;

    if (Number(pagina) < 0 || !Number.isInteger(Number(pagina))) {
        return res.status(400).json({ "mensagem": "A pagina deve ser um número válido e inteiro" });
    }

    try {
        const listPokemons = await listarPokemons(pagina);

        res.status(200).json(listPokemons.results);

    } catch (error) {
        res.status(error.response.status).json(error.message);
    }

}

const getPokemon = async (req, res) => {
    const { parPkm } = req.params;

    try {
        const { id, name, height, weight, base_experience, forms, abilities, species } = await detalharPokemon(parPkm);

        const pokemon = {
            id,
            name,
            height,
            weight,
            base_experience,
            forms,
            abilities,
            species
        }

        res.status(200).json(pokemon);

    } catch (error) {
        res.status(error.response.status).json(error.message);
    }

}

module.exports = {
    getPokemons,
    getPokemon
}
