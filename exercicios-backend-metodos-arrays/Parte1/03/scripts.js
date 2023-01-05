const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function selecionarCarros(array, posicaoCarro) {
    const encontrarCarros = array.slice(posicaoCarro, posicaoCarro + 3).join(" - ");
    console.log(encontrarCarros);
}

selecionarCarros(nomes, posicao);