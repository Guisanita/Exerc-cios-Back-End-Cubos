const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

function validandoUsuariosHabilitados(arrayObjetos) {

    const filtrarMaioresIdade = arrayObjetos.filter((objetoAtual) => {
        return objetoAtual.idade >= 18 && objetoAtual.idade <= 65;
    })

    const todosHabilitados = filtrarMaioresIdade.every((itemObjetoAtual) => {
        return itemObjetoAtual.habilitado;
    })

    if (todosHabilitados) {
        console.log("Todos passaram no teste!");
    } else {
        console.log("Todos precisam estar habilitados!");
    }
}

validandoUsuariosHabilitados(usuários);