const { findIndexAccountNumber } = require("../func/global.func");
const data = require("../data/data.json");

const validateJustAccountPassword = async (req, res, next) => {
    const { senha, numero_conta } = req.body;

    const findIndex = await findIndexAccountNumber(numero_conta);

    if (findIndex !== -1 && senha !== data.contas[findIndex].usuario.senha) {
        return res.status(401).json({ "mensagem": "Senha incorreta!" });
    }

    next();
}

const validateTwoAccountsPassword = async (req, res, next) => {
    const { senha, numero_conta_origem } = req.body;

    const findIndex = await findIndexAccountNumber(numero_conta_origem);

    if (findIndex !== -1 && senha !== data.contas[findIndex].usuario.senha) {
        return res.status(401).json({ "mensagem": "Senha incorreta!" });
    }

    next();
}

module.exports = {

    validateJustAccountPassword,
    validateTwoAccountsPassword
}