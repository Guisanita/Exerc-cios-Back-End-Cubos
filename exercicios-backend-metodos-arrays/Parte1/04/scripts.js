const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];


// function automatizarProcessoAtendimento(array, operacao, nomePaciente) {

//     if (operacao === "atender") {
//         const removerPaciente = array.slice(1).join(", ");

//         console.log(removerPaciente);
//     } else if (operacao === "agendar") {
//         array.push(nomePaciente);

//         console.log(array.join(", "));
//     } else {
//         console.log("Favor escolher uma opção válida de operação!");
//     }


// }

// automatizarProcessoAtendimento(pacientes, "atender", "Robson");

function automatizarProcessoAtendimento(array, operacao, nomePaciente) {

    if (operacao === "atender") {
        array.slice(1);

    } else if (operacao === "agendar") {
        array.push(nomePaciente);

    } else {
        console.log("Favor escolher uma opção válida de operação!");
    }

    console.log(array.join(", "));
}

automatizarProcessoAtendimento(pacientes, "agendar", "Robson");