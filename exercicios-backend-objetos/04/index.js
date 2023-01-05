let usuarios = [
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
    }
]

let maiorIdade = false;

for (let item of usuarios) {

    if (item.idade > 17) {
        item.maiorIdade = true;
    } else {
        item.maiorIdade = false;
    }

}

console.log(usuarios);