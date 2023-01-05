const passwordBank = require("../constant/passwordBank");

const validatePassword = (req, res, next) => {
    const { senha_banco } = req.query;

    if (!senha_banco) {
        return res.status(401).json({ "mensagem": "Senha é obrigatória!" });
    }

    if (senha_banco !== passwordBank) {
        return res.status(401).json({ "mensagem": "Senha incorreta!" });
    }

    next();

}

module.exports = validatePassword;