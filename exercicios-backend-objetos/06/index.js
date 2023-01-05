const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = [];
const adultos = [];

for (pessoa of usuarios) {
    if (pessoa.idade < 18) {
        jovens.push(pessoa);
    } else {
        adultos.push(pessoa);
    }
}

console.log(jovens);
console.log(adultos);

