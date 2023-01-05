const { listarPokemons, detalharPokemon } = require("utils-playground");

const getPokemons = async (req, res) => {
    const { pagina } = req.query;

    const listPokemons = await listarPokemons(pagina);

    res.status(200).json(listPokemons.results);
}

const getPokemon = async (req, res) => {
    const { parPkm } = req.params;

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
}

module.exports = {
    getPokemons,
    getPokemon
}
