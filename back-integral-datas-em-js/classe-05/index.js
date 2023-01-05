const { isBefore, set, isAfter, getDay } = require("date-fns");

const isOpen = (date) => {

    if (getDay(date) === 0) {
        console.log("Fechada-Domingo");
        return false;
    }

    if (getDay(date) === 6) {
        if (isAfter(date, set(date, {
            hours: 12,
            minutes: 0
        }))) {
            console.log("fechada-sabado-depois");
            return false;
        }
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

isOpen(new Date(2021, 3, 24, 07, 59));
