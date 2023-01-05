const email = "a.luno@cubo.sac.ademy";

function validarEmail(email) {
    if (email.includes("@") && email.includes(".") && email[0] !== "." && email[email.length - 1] !== ".") {
        console.log("Email válido");
    } else {
        console.log("Email inválido");
    }
}

validarEmail(email);