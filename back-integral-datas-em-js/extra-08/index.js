const { format, getMonth } = require("date-fns");

const translateMonths = (date) => {
    const month = getMonth(date);

    if (month === 0) {
        return "jan";
    } else if (month === 1) {
        return "fev"
    } else if (month === 2) {
        return "mar"
    } else if (month === 3) {
        return "abr"
    } else if (month === 4) {
        return "mai"
    } else if (month === 5) {
        return "jun"
    } else if (month === 6) {
        return "jul"
    } else if (month === 7) {
        return "ago"
    } else if (month === 8) {
        return "set"
    } else if (month === 9) {
        return "out"
    } else if (month === 10) {
        return "nov"
    } else if (month === 11) {
        return "dez"
    }

}

const formatDateA = (date) => {
    let monthTranslate = "";
    const month = getMonth(date);
    if (month === 0) {
        monthTranslate = "de janeiro de";
    } else if (month === 1) {
        monthTranslate = "de fevereiro de";
    } else if (month === 2) {
        monthTranslate = month = "de março de";
    } else if (month === 3) {
        monthTranslate = "de abril de";
    } else if (month === 4) {
        monthTranslate = "de maio de";
    } else if (month === 5) {
        monthTranslate = "de junho de";
    } else if (month === 6) {
        monthTranslate = "de julho de";
    } else if (month === 7) {
        monthTranslate = "de agosto de";
    } else if (month === 8) {
        monthTranslate = "de setembro de";
    } else if (month === 9) {
        monthTranslate = "de outubro de";
    } else if (month === 10) {
        monthTranslate = "de novembro de";
    } else if (month === 11) {
        monthTranslate = "de dezembro de";
    }

    const dateFormated = format(date, `dd '${monthTranslate}' yyyy`);
    console.log(dateFormated);
};
formatDateA(new Date(2020, 07, 8));

const formatDateB = (date) => {
    const dateFormated = format(date, `dd${"/"}MM${"/"}yyyy`);
    console.log(dateFormated);
};
formatDateB(new Date(2020, 09, 5));

const formatDateC = (date) => {
    const month = translateMonths(date);

    const dateFormated = format(date, `d '${month}'`);
    console.log(dateFormated);
};

formatDateC(new Date(2020, 07, 8));

const formatDateD = (date) => {
    const month = translateMonths(date);

    const dateFormated = format(date, `dd '${month}' yyyy`);
    console.log(dateFormated);
};
formatDateD(new Date(2020, 09, 5));

formatDateC(new Date(2020, 07, 8));

const formatDateE = (date) => {
    const month = translateMonths(date);

    const dateFormated = format(date, `dd 'de ${month} de' yyyy`);
    console.log(dateFormated);
};
formatDateE(new Date(2021, 01, 5));

const formatDateF = (date) => {
    const month = translateMonths(date);

    const dateFormated = format(date, `dd'/${month}'`);
    console.log(dateFormated);
};
formatDateF(new Date(2021, 09, 5));