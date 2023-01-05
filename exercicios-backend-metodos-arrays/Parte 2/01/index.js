const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];


const nomeDoLivro = "Guerra e Paz";

function encontrarlivro(arrayLivros, nomeDoLivro) {
    const encontrandoLivro = arrayLivros.findIndex((livro) => {
        return livro === nomeDoLivro;
    });

    console.log(`O livro está na posição ${encontrandoLivro + 1}`);
}

encontrarlivro(livros, nomeDoLivro);