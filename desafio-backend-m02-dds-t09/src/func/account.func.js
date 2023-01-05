const data = require("../data/data.json");

const findIndexCPF = async (cpf) => {
    const foundedIndexAccount = data.contas.findIndex((element) => {
        return element.usuario.cpf === cpf
    })
    return foundedIndexAccount;
}

const findIndexEmail = async (email) => {
    const foundedIndexAccount = data.contas.findIndex((element) => {
        return element.usuario.email === email
    })
    return foundedIndexAccount;
}

module.exports = {
    findIndexCPF,
    findIndexEmail
}