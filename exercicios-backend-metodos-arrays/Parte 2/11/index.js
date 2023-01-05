const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

function filtrandoNomePelaLetra(arrayNomes, letra) {

    const nomesLetra = arrayNomes.filter((nomeAtual) => {
        return nomeAtual[0].toLowerCase() === letra.toLowerCase();
    })

    console.log(nomesLetra);
}

filtrandoNomePelaLetra(nomes, "c");