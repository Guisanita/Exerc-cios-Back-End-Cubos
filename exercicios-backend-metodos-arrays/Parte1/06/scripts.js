const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
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

function encontrarDono(lista, nomePet) {
    let temDono = false;
    let dono = {}
    for (objeto of lista) {
        if (objeto.pets.includes(nomePet)) {
            temDono = true;
            dono = objeto;
        }
    }

    if (temDono) {
        console.log(dono);
    } else {
        console.log(`Que pena ${nomePet}, não encontramos seu dono(a).`);
    }


}

encontrarDono(usuarios, "Max");

