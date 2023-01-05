const getPassword = (req, res, next) => {
    const { password } = req.query;

    if (!password) {
        return res.status(401).json({
            "mensagem": "Favor insira a senha"
        })
    }
    if (password !== "cubos123") {
        return res.status(401).json({
            "mensagem": "Senha incorreta"
        })
    }
    next();
}

module.exports = getPassword;