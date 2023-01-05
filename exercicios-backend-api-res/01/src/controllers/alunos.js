let { idCount, alunos } = require("../data/alunos");

const getAlunos = (req, res) => {
    return res.status(200).json(alunos);
}

const getAluno = (req, res) => {
    const { id } = req.params;

    if (Number(id) < 0 || !Number.isInteger(Number(id))) {
        return res.status(400).json({ "mensagem": "O ID deve ser um número válido e inteiro" });
    }

    const foundStudent = alunos.find((student) => {
        return student.id === Number(id);
    });

    if (!foundStudent) {
        return res.status(404).json({ "mensagem": "O aluno não foi encontrado" });
    }

    return res.status(200).json(foundStudent);
}

const addStudent = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ "mensagem": "Preencha todos os dados!" });
    }

    if (nome.trim() === "" || sobrenome.trim() === "" || curso.trim() === "") {
        return res.status(400).json({ "mensagem": "Preencha todos os dados, não é permitido dado vazio!" });
    }

    if (Number(idade) < 18) {
        return res.status(400).json({ "mensagem": "Apenas alunos maiores de idade podem se cadastrar!" });
    }

    alunos.push({
        id: idCount++,
        nome,
        sobrenome,
        idade,
        curso
    });

    return res.status(201).json();
}

const deleteStudent = (req, res) => {
    const { id } = req.params;

    if (Number(id) < 0 || !Number.isInteger(Number(id))) {
        return res.status(400).json({ "mensagem": "O ID deve ser um número válido e inteiro" });
    }

    const foundStudent = alunos.find((student) => {
        return student.id === Number(id);
    });

    if (!foundStudent) {
        return res.status(404).json({ "mensagem": "O aluno não foi encontrado" });
    }

    alunos.splice(alunos.indexOf(foundStudent), 1)

    return res.status(200).json(foundStudent);
}

module.exports = {
    getAlunos,
    getAluno,
    addStudent,
    deleteStudent
}