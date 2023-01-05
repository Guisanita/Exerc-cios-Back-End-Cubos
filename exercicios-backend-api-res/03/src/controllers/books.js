let { idCountBooks, books } = require("../data/books");

const getBooks = (req, res) => {
    return res.status(200).json(books);
}

const getBook = (req, res) => {
    const { id } = req.params;

    if (Number(id) < 0 || !Number.isInteger(Number(id))) {
        return res.status(400).json({ "mensagem": "O ID deve ser um número válido e inteiro" });
    }

    const foundBook = books.find((book) => {
        return book.id === Number(id);
    });

    if (!foundBook) {
        return res.status(404).json({ "mensagem": "Não existe livro para o ID informado." })
    }

    return res.status(200).json(foundBook);

}

const addBook = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ "mensagem": "Favor preencher todos os dados do livro." });
    }

    books.push({
        id: idCountBooks++,
        titulo,
        autor,
        ano,
        numPaginas
    })

    return res.status(201).json(books[idCountBooks - 2]);
}

const replaceBook = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (Number(id) < 0 || !Number.isInteger(Number(id))) {
        return res.status(400).json({ "mensagem": "O ID deve ser um número válido e inteiro" });
    }

    if (!titulo || !autor || !ano || !numPaginas) {
        return res.status(400).json({ "mensagem": "Favor preencher todos os dados do livro." });
    }

    const foundBook = books.findIndex((book) => {
        return book.id === Number(id);
    })

    if (foundBook === -1) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser substituído para o ID informado." });
    }

    const bookForReplace = {
        id: Number(id),
        titulo,
        autor,
        ano,
        numPaginas
    }

    books.splice(foundBook, 1, bookForReplace);

    return res.status(200).json({ "mensagem": "Livro substituído." });

}

const chanceBook = (req, res) => {
    const { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    if (Number(id) < 0 || !Number.isInteger(Number(id))) {
        return res.status(400).json({ "mensagem": "O ID deve ser um número válido e inteiro" });
    }

    const foundBook = books.find((book) => {
        return book.id === Number(id);
    });

    if (!foundBook) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser alterado para o ID informado." });
    }

    if (titulo) {
        foundBook.titulo = titulo;
    }

    if (autor) {
        foundBook.autor = autor;
    }

    if (ano) {
        foundBook.ano = ano;
    }

    if (numPaginas) {
        foundBook.numPaginas = numPaginas;
    }

    res.status(200).json({ "mensagem": "Livro alterado." });

}

const deleteBook = (req, res) => {
    const { id } = req.params;

    if (Number(id) < 0 || !Number.isInteger(Number(id))) {
        return res.status(400).json({ "mensagem": "O ID deve ser um número válido e inteiro" });
    }

    const foundBook = books.findIndex((book) => {
        return book.id === Number(id);
    })

    if (foundBook === -1) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser removido para o ID informado." });
    }

    books.splice(foundBook, 1);

    return res.status(200).json({ "mensagem": "Livro removido." });
}

module.exports = {
    getBooks,
    getBook,
    addBook,
    replaceBook,
    chanceBook,
    deleteBook
}