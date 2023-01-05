const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

function padronizarNomes(array) {
    const padronizando = array.map((item, i) => {
        return i + " " + "-" + " " + item[0].toUpperCase() + item.slice(1).toLowerCase();
    })

    console.log(padronizando);
}

padronizarNomes(frutas);