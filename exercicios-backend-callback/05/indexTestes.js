while (pararSoneca < numeroDeSonecas) {
    pararSoneca++;

    function soneca() {
        let pararAlarmeSoneca = 0;
        function esperarSoneca() {
            console.log("Beep beep!");
            pararAlarmeSoneca++;

            if (pararAlarme === tempoAlarmandoEmSegundos) {
                clearInterval(idSoneca);
                console.log(`Soneca ativada, próximo alarme em ${tempoSoneca} segundos`);
            }
        }
        const idSoneca = setInterval(esperarSoneca, 1000);
    }

    setTimeout(soneca, converterTempoMilesegundos(tempoSoneca));

}