const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];


let tempoCadaJogador = ((jogadores.length) / 10) * 1000

function imprimirJogadorDaVez(jogadores) {
    let indice = 1;
    console.log(`${jogadores[0]}`)
    let arrayComFinalizacao = [...jogadores, "A rodada terminou!"];
    function jogadorDaVez() {
        console.log(`${arrayComFinalizacao[indice]}`);
        indice++;
        if (indice > arrayComFinalizacao.length - 1) {
            clearInterval(id);
        }
    }

    const id = setInterval(jogadorDaVez, tempoCadaJogador);

}

imprimirJogadorDaVez(jogadores);



