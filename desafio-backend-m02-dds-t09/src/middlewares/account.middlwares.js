const { findIndexAccountNumber } = require("../func/global.func");
const data = require("../data/data.json");

const validateAccountPasswordInBody = async (req, res, next) => {
    const { senha } = req.body;
    const { numeroConta } = req.params;

    if (!senha) {
        return res.status(401).json({ "mensagem": "Senha é obrigatória!" });
    }

    const findIndex = await findIndexAccountNumber(numeroConta);

    if (findIndex !== -1 && senha !== data.contas[findIndex].usuario.senha) {
        return res.status(401).json({ "mensagem": "Senha incorreta!" });
    }

    next();
}

const validateAccountPasswordInQuery = async (req, res, next) => {
    const { numero_conta, senha } = req.query;

    if (!senha) {
        return res.status(401).json({ "mensagem": "Senha é obrigatória!" });
    }

    const findIndex = await findIndexAccountNumber(numero_conta);

    if (findIndex !== -1 && senha !== data.contas[findIndex].usuario.senha) {
        return res.status(401).json({ "mensagem": "Senha incorreta!" });
    }

    next();
}

const validateAllDataInBody = async (req, res, next) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ "mensagem": "É necessário preencher todos os dados!" });
    }

    next();
}

const validateDatainQuery = async (req, res, next) => {
    const { numero_conta, senha } = req.query;

    if (!numero_conta || !senha) {
        return res.status(400).json({ "mensagem": "Favor preencher os dados." });
    }

    next();
}


module.exports = {
    validateAccountPasswordInBody,
    validateAccountPasswordInQuery,
    validateAllDataInBody,
    validateDatainQuery
};
