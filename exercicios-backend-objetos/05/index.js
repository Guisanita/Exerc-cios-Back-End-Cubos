const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: []
}

const nomeAulas = ["Introdução a programação", "Variáveis", "Condicionais", "Arrays"];

for (let i = 0; i < nomeAulas.length; i++) {
    curso.aulas[i] = {
        id: i, nomeAula: nomeAulas[i]
    }
}

console.log(curso);

// const aula1 = {
//     identificador: 1,
//     nome_da_aula: "Introdução a programação"
// }

// const aula2 = {
//     identificador: 2,
//     nome_da_aula: "Variáveis"
// }

// const aula3 = {
//     identificador: 3,
//     nome_da_aula: " Condicionais"
// }

// const aula4 = {
//     identificador: 4,
//     nome_da_aula: "Arrays"
// }

// const listaAulas = [aula1, aula2, aula3, aula4];

// curso.aulas = listaAulas;

// console.log(curso);



