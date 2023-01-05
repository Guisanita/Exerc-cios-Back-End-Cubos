const products = require("../data/products");
const { getStateFromZipcode } = require("utils-playground");

const getProducts = async (req, res) => {
    return await res.status(200).json(products);
}

const getProduct = async (req, res) => {
    const { idProduto } = await req.params;

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

    const states = await getStateFromZipcode(cep);
    const product = products.find((product) => {
        return product.id === Number(idProduto);
    });

    const state = states.toUpperCase().trim();

    let shippingValue = 0;

    const possibilities = async () => {

        if (state === "BA" || state === "SE" || state === "AL" || state === "PE" || state === "PB") {
            return shippingValue = product.valor * 0.1;
        };

        if (state === "SP" || state === "RJ") {
            return shippingValue = product.valor * 0.15;
        };

        if (state !== "BA" || state !== "SE" || state !== "AL" || state !== "PE" || state !== "PB" || state !== "SP" || state !== "RJ") {
            return shippingValue = product.valor * 0.12;
        };

    }

    await possibilities();

    const productAndPrice = {
        "produto": {
            ...product
        },
        "estado": state,
        "frete": shippingValue
    }

    return res.status(200).json(productAndPrice);
}

module.exports = {
    getProducts,
    getProduct,
    calculateShipping
}

// console.log(typeof state, state);
    // const shippingNE = ["BA", "SE", "AL", "PE", "PB"]
    // const shippingSE = ["SP", "RJ"]
    // Aqui vc GARANTE que o retorno vai ser UpperCase - ou seja, se em algum momento alguem mudar algo nessa api pra minusculo, seu coodigo nao quebra

    // let shippingValue = 0
    // if (shippingNE.includes(state)) {
    //     shippingValue = product.valor * 0.1; //note que eu mudei o nome da varaivel - nao eh legal misturar EN com PT, e vc ja fez o codigo todo em EN - mantenha 
    // } else if (shippingSE.includes(state)) {
    //     shippingValue = product.valor * 0.15;
    // } else {
    //     shippingValue = product.valor * 0.12;}


      // if (state === "BA" || state === "SE" || state === "AL" || state === "PE" || state === "PB") {
        //     shippingValue = product.valor * 0.1;
        // } else if (state === "SP" || state === "RJ") {
        //     shippingValue = product.valor * 0.15;
        // } else {
        //     shippingValue = product.valor * 0.12;
        // }