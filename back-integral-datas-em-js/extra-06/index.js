const { intervalToDuration } = require("date-fns");

const verificarValidadePromocao = (dateInicio, dateSolicitacao) => {

    const interval = intervalToDuration({
        start: dateInicio,
        end: dateSolicitacao
    });

    const { years, months, days, hours, minutes, seconds } = interval;

    if (years !== 0 || months !== 0 || days > 1) {
        console.log("Passou das 24hrs");
        return false;
    }

    if (days === 1 && hours !== 0 || minutes !== 0 || seconds !== 0) {
        console.log("Passou das 24hrs");
        return false;
    }
    console.log(interval);
    console.log("Promoção válida");
    return true;

}

verificarValidadePromocao(new Date(1929, 0, 15, 12, 0, 0), new Date(1930, 0, 15, 12, 0, 0));