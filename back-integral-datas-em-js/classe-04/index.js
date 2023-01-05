const { isBefore, set, isAfter, getDay } = require("date-fns");

const isOpen = (date) => {

    if (getDay(date) === 0 || getDay(date) === 6) {
        console.log("Fechada-Fim de semana");
        return false;
    }

    if (isBefore(date, set(date, {
        hours: 8
    }))) {
        console.log("fechada-antes");
        return false;
    }

    if (isAfter(date, set(date, {
        hours: 18,
        minutes: 0
    }))) {
        console.log("fechada-depois");
        return false;
    }

    console.log("aberta");
    return true;

}

isOpen(new Date(2021, 3, 24, 12));
