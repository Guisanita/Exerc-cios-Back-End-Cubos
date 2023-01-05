const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const programadorMaiorVinte = pessoas.filter((objeto) => {
    return objeto.profissao === "Programador" && objeto.idade > 20;
})

console.log(programadorMaiorVinte);

const jornalistaMaisTrinta = pessoas.filter((objeto) => {
    return objeto.profissao === "Jornalista" && objeto.idade > 30;
})

console.log(jornalistaMaisTrinta);

const jornalistasEProgramadorJovem = pessoas.filter((objeto) => {
    return objeto.idade < 30 && (objeto.profissao === "Jornalista" || objeto.profissao === "Programador")
})

console.log(jornalistasEProgramadorJovem);


// Funcao para os dois primeiros
function procurandoPessoas(array, profissaoEscolhida, idadeEscolhida) {
    const pessoasEscolhidas = array.filter((objeto) => {
        return objeto.profissao === profissaoEscolhida && objeto.idade > idadeEscolhida
    })

    console.log(pessoasEscolhidas);
}

procurandoPessoas(pessoas, "Programador", 20);
procurandoPessoas(pessoas, "Jornalista", 30);

