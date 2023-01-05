const data = require("../data/data.json");
const { findIndexAccountNumber } = require("../func/global.func");
const fs = require("fs/promises");
const { format } = require("date-fns")

const deposit = async (req, res) => {
    const { numero_conta, valor } = req.body;

    if (!numero_conta || !valor) {
        return res.status(400).json({ "mensagem": "Favor preencher os dados." });
    }

    const foundIndex = await findIndexAccountNumber(numero_conta);

    if (foundIndex === -1) {
        return res.status(400).json({ "mensagem": "Esta conta não existe" });
    }

    if (valor <= 0) {
        return res.status(400).json({ "mensagem": "Só é possível depositar valores maiores que 0." });
    }

    try {
        data.contas[foundIndex].saldo += valor;
        data.depositos.push({
            data: format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
            numero_conta,
            valor
        })

        await fs.writeFile('./src/data/data.json', JSON.stringify(data));
        return res.status(200).json();
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const withdraw = async (req, res) => {
    const { numero_conta, valor, senha } = req.body;

    if (!numero_conta || !valor || !senha) {
        return res.status(400).json({ "mensagem": "Favor inserir os dados." })
    }

    if (valor <= 0) {
        return res.status(400).json({ "mensagem": "O valor deve ser maior que zero!" })
    }

    const foundIndex = await findIndexAccountNumber(numero_conta);

    if (foundIndex === -1) {
        return res.status(400).json({ "mensagem": "Esta conta não existe" });
    }

    if (data.contas[foundIndex].saldo < valor) {
        return res.status(401).json({ "mensagem": "Saldo insifuciente." });
    }

    try {
        data.contas[foundIndex].saldo -= valor;
        data.saques.push({
            data: format(new Date(), "yyyy-MM-dd ' ' hh:mm:ss"),
            numero_conta,
            valor
        })
        await fs.writeFile('./src/data/data.json', JSON.stringify(data));
        return res.status(200).json();
    } catch (error) {
        res.status(500).json(error.message);
    }

}

const transfer = async (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
        return res.status(400).json({ "mensagem": "Favor inserir os dados." })
    }

    const foundIndexAccountOrigin = await findIndexAccountNumber(numero_conta_origem);

    const foundIndexAccountDestination = await findIndexAccountNumber(numero_conta_destino);

    if (foundIndexAccountOrigin === -1) {
        return res.status(400).json({ "mensagem": "A conta de origem não existe" });
    }

    if (foundIndexAccountDestination === -1) {
        return res.status(400).json({ "mensagem": "A conta de destino não existe" });
    }

    if (data.contas[foundIndexAccountOrigin].saldo < valor) {
        return res.status(401).json({ "mensagem": "Saldo insifuciente." });
    }
    try {
        data.contas[foundIndexAccountOrigin].saldo -= valor;
        data.contas[foundIndexAccountDestination].saldo += valor;
        data.transferencias.push({
            data: format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
            numero_conta_origem,
            numero_conta_destino,
            valor
        });
        await fs.writeFile('./src/data/data.json', JSON.stringify(data));
        return res.status(200).json();
    } catch (error) {
        res.status(500).json(error.message);
    }

}


module.exports = {
    deposit,
    withdraw,
    transfer
}