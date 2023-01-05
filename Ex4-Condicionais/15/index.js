const primeiroNome = "Mario";
const sobrenome = "bros";
const apelido = "";

if (!sobrenome && !apelido) {
    console.log(`${primeiroNome}`);
} else if (apelido) {
    console.log(`${apelido}`);
} else if (primeiroNome && sobrenome) {
    console.log(`${primeiroNome} ${sobrenome}`);
}

