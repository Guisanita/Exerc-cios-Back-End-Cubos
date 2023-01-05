const { differenceInCalendarDays } = require("date-fns");

const verificarValidadePromocao = (dateInicio, dateSolicitacao) => {

    const days = differenceInCalendarDays(dateSolicitacao, dateInicio);

    if (days < 0) {
        console.log("datas invertidas");
        return false;

    }
    if (days > 30) {
        console.log("Passou de 30 dias, promoção encerrada");
        return false;
    }

    console.log("Promoção válida");
    return true;

}

verificarValidadePromocao(new Date(1929, 08, 29, 00, 0, 0), new Date(1929, 09, 30, 00, 0, 0));