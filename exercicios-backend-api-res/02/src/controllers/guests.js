const guests = require("../data/guests");

const getGuests = (req, res) => {
    const { nome } = req.query;

    if (!nome) {
        return res.status(200).json(guests);
    }

    const guest = guests.find((guest) => {
        return guest === nome
    })

    if (!guest) {
        return res.status(400).json({ "mensagem": "O convidado buscado não está presente na lista" })
    }

    return res.status(200).json({ "mensagem": "Convidado presente." })
}

const addGuest = (req, res) => {
    const { nome } = req.body;

    const verificarNome = guests.find((guest) => {
        return guest.toLowerCase() === nome.toLowerCase();
    })

    if (verificarNome) {
        return res.status(400).json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    }

    guests.push(nome);

    return res.status(201).json({ "mensagem": "Convidado adicionado." });
}

const deleteGuest = (req, res) => {
    const { nome } = req.params;

    const verificarNome = guests.findIndex((guest) => {
        return guest.toLowerCase() === nome.toLowerCase();
    })

    if (verificarNome === -1) {
        return res.status(400).json({ "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." })
    }

    guests.splice(verificarNome, 1);

    return res.status(200).json({ "mensagem": "Convidado removido." })

}

module.exports = {
    getGuests,
    addGuest,
    deleteGuest
}