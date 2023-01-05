const data = require("../data/data.json");

const findIndexAccountNumber = async (numberAccount) => {
    const foundIndex = data.contas.findIndex((element) => {
        return element.numero === Number(numberAccount);
    })
    return foundIndex;
}

module.exports = {
    findIndexAccountNumber
}