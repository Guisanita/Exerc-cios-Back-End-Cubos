const { isBefore, set, isAfter } = require("date-fns");

const isOpen = (date) => {

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

isOpen(new Date(2015, 1, 1, 7, 59));
