let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 3;


function converterTempoMilesegundos(tempo) {
    return tempo * 1000
}


function timer(tempo, tempoSoneca, numeroDeSonecas) {
    console.log(`Timer iniciado, disparando alarme em ${tempo} segundos!`);
    let pararAlarme = 0;

    function esperar() {
        console.log("Beep beep!");
        function dispararAlarme() {
            console.log("Beep beep!");
            pararAlarme++;

            if (pararAlarme === tempoAlarmandoEmSegundos) {
                clearInterval(id);
                console.log(`Soneca ativada, próximo alarme em ${tempoSoneca} segundos!`);
                let alarmeParar = 0;

                function timerAlarme() {
                    alarmeParar++;
                    let parartimerAlarme = 0;

                    function dispararTimerAlarme() {
                        console.log("Beep beep!");
                        parartimerAlarme++;

                        if (parartimerAlarme === tempoAlarmandoEmSegundos) {
                            clearInterval(idAlarme);
                            if (alarmeParar === numeroDeSonecas) {
                                console.log("Fim do Timer!")
                            } else {
                                console.log(`Soneca ativada, próximo alarme em ${tempoSoneca} segundos!`);
                            }

                        }
                    }

                    if (alarmeParar === numeroDeSonecas) {
                        clearInterval(idAlarmeTimer);

                    }

                    const idAlarme = setInterval(dispararTimerAlarme, 1000);

                }

                const idAlarmeTimer = setInterval(timerAlarme, converterTempoMilesegundos(tempoSoneca));

            }
        }

        const id = setInterval(dispararAlarme, 1000);

    }

    setTimeout(esperar, converterTempoMilesegundos(tempo));

}


timer(tempoParaAlarmarEmSegundos, tempoSonecaEmSegundos, numeroDeSonecas);

// timerAlarme(tempoSonecaEmSegundos);