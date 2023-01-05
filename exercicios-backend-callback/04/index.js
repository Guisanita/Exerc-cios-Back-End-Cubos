

let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;

function converterTempoMilesegundos(tempo) {
    return tempo * 1000
}

function timer(tempo) {
    console.log(`Timer iniciado, disparando alarme em ${tempo} segundos!`);
    let pararAlarme = 0

    function esperar() {
        console.log("Beep beep!");
        function dispararAlarme() {
            console.log("Beep beep!");
            pararAlarme++;

            if (pararAlarme === tempoAlarmandoEmSegundos) {
                clearInterval(id);
            }
        }
        const id = setInterval(dispararAlarme, 1000);
    }

    setTimeout(esperar, converterTempoMilesegundos(tempo));

}

timer(tempoParaAlarmarEmSegundos);


