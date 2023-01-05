const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let objeto of usuarios) {
    const { nome, pets } = objeto;
    const numeroPets = pets.length;
    if (numeroPets === 0) {
        console.log(`Sou ${nome} e não tenho pets.`);
    } else if (numeroPets === 1) {
        console.log(`Sou ${nome} e tenho ${numeroPets} pet.`)
    } else {
        console.log(`Sou ${nome} e tenho ${numeroPets} pets.`)
    }
}

