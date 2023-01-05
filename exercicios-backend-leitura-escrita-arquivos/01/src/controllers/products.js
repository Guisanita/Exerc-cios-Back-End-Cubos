const products = require("../data/products");
const { getStateFromZipcode } = require("utils-playground");
const fs = require("fs/promises");

const getProducts = async (req, res) => {
    return res.status(200).json(products);
}

const getProduct = async (req, res) => {
    const { idProduto } = req.params;

    if (Number(idProduto) < 0 || !Number.isInteger(Number(idProduto))) {
        return res.status(400).json({ "mensagem": "O ID deve ser um número válido e inteiro" });
    }

    const product = products.find((product) => {
        return product.id === Number(idProduto);
    });

    if (!product) {
        return res.status(404).json({ "mensagem": "Não existe produto com o id indicado" })
    }

    return res.status(200).json(product);
}

const calculateShipping = async (req, res) => {
    const { idProduto, cep } = req.params;

    const product = products.find((product) => {
        return product.id === Number(idProduto);
    });

    if (!product) {
        return res.status(404).json({ "mensagem": "Produto não encontrado" });
    }

    try {
        const states = await getStateFromZipcode(cep);

        if (!states) {
            return res.status(404).json({ "mensagem": "Cep inexistente" });
        }

        const state = states.toUpperCase().trim();

        const shippingNE = ["BA", "SE", "AL", "PE", "PB"]
        const shippingSE = ["SP", "RJ"]
        let shippingValue = 0;

        if (shippingNE.includes(state)) {
            shippingValue = product.valor * 0.1;
        } else if (shippingSE.includes(state)) {
            shippingValue = product.valor * 0.15;
        } else {
            shippingValue = product.valor * 0.12;
        }

        const productAndPrice = {
            "produto": {
                ...product
            },
            "estado": state,
            "frete": shippingValue
        }

        return res.status(200).json(productAndPrice);

    } catch (error) {

        return res.status(error.response.status).json(error.message);
    }

}

module.exports = {
    getProducts,
    getProduct,
    calculateShipping
}

