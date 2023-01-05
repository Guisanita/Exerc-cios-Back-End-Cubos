let data = require("../data/data.json");
const { findIndexCPF, findIndexEmail } = require("../func/account.func");
const { findIndexAccountNumber } = require("../func/global.func");
const fs = require("fs/promises");

const getAccounts = async (req, res) => {
    return res.status(200).json(data.contas);
};

const postAccount = async (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    const indexFoundedCPF = await findIndexCPF(cpf);
    if (indexFoundedCPF !== -1) {
        return res.status(400).json({ "mensagem": "CPF já cadastrado!" })
    }

    const indexFoundedEmail = await findIndexEmail(email);
    if (indexFoundedEmail !== -1) {
        return res.status(400).json({ "mensagem": "Email já cadastrado!" })
    }

    try {

        data.contas.push({
            numero: data.accountCounter++,
            saldo: 0,
            usuario: {
                nome,
                cpf,
                data_nascimento,
                telefone,
                email,
                senha
            }
        })

        await fs.writeFile('./src/data/data.json', JSON.stringify(data));
        return res.status(200).json();

    } catch (error) {
        res.status(500).json(error.message);
    }

}

const updateAccount = async (req, res) => {
    const { numeroConta } = req.params;

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

    const foundIndex = await findIndexAccountNumber(numeroConta);

    if (foundIndex === -1) {
        return res.status(400).json({ "mensagem": "Esta conta não existe!" })
    }

    const registeredCPF = data.contas[foundIndex].usuario.cpf;
    const registeredEmail = data.contas[foundIndex].usuario.email;

    if (cpf !== registeredCPF) {
        const indexFoundedCPF = await findIndexCPF(cpf);
        if (indexFoundedCPF !== -1) {
            return res.status(400).json({ "mensagem": "CPF já cadastrado!" })
        }
    }

    if (email !== registeredEmail) {
        const indexFoundedEmail = await findIndexEmail(email);
        if (indexFoundedEmail !== -1) {
            return res.status(400).json({ "mensagem": "Email já cadastrado!" })
        }
    }

    try {

        data.contas[foundIndex] = {
            ...data.contas[foundIndex],
            usuario: {
                nome,
                cpf: cpf || registeredCPF,
                data_nascimento,
                telefone,
                email: email || registeredEmail,
                senha
            }
        }

        await fs.writeFile('./src/data/data.json', JSON.stringify(data));

    } catch (error) {
        res.status(500).json(error.message);
    }

    return res.status(204).json();
}

const deleteAccount = async (req, res) => {
    const { numeroConta } = req.params;

    const foundIndex = await findIndexAccountNumber(numeroConta);

    if (foundIndex === -1) {
        return res.status(400).json({ "mensagem": "Esta conta não existe!" })
    }

    if (data.contas[foundIndex].saldo !== 0) {
        return res.status(403).json({ "mensagem": "A conta só pode ser removida se o saldo for zero!" })
    }

    try {
        data.contas.splice(foundIndex, 1);
        await fs.writeFile('./src/data/data.json', JSON.stringify(data));
        return res.status(200).json();
    } catch (error) {
        res.status(500).json(error.message);
    }

}

const getBankBalance = async (req, res) => {
    const { numero_conta, senha } = req.query;

    const foundIndex = await findIndexAccountNumber(numero_conta);

    if (foundIndex === -1) {
        return res.status(400).json({ "mensagem": "Esta conta não existe!" });
    }

    if (data.contas[foundIndex].usuario.senha !== senha) {
        return res.status(401).json({ "mensagem": "Senha incorreta" });
    }

    return res.status(200).json({ "Saldo": `${data.contas[foundIndex].saldo}` });

}

const getBankStatement = async (req, res) => {
    const { numero_conta, senha } = req.query;

    const foundIndex = await findIndexAccountNumber(numero_conta);

    if (foundIndex === -1) {
        return res.status(400).json({ "mensagem": "Esta conta não existe!" });
    }

    if (data.contas[foundIndex].usuario.senha !== senha) {
        return res.status(401).json({ "mensagem": "Senha incorreta" });
    }

    let arrayDepositos = [];
    let arraySaques = [];
    let arraytransferenciasEnviadas = [];
    let arraytransferenciasRecebidas = [];

    for (const deposito of data.depositos) {

        if (Number(deposito.numero_conta) === Number(numero_conta)) {
            arrayDepositos.push(deposito);
        }
    }

    for (const saque of data.saques) {

        if (Number(saque.numero_conta) === Number(numero_conta)) {
            arraySaques.push(saque);
        }
    }

    for (const transferencia of data.transferencias) {

        if (Number(transferencia.numero_conta_origem) === Number(numero_conta)) {
            arraytransferenciasEnviadas.push(transferencia);
        }

        if (Number(transferencia.numero_conta_destino) === Number(numero_conta)) {
            arraytransferenciasRecebidas.push(transferencia);
        }
    }

    return res.status(200).json({ "depositos": arrayDepositos, "saques": arraySaques, "transferenciasEnviadas": arraytransferenciasEnviadas, "transferenciasRecebidas": arraytransferenciasRecebidas });
}

module.exports = {
    getAccounts,
    postAccount,
    updateAccount,
    deleteAccount,
    getBankBalance,
    getBankStatement
}