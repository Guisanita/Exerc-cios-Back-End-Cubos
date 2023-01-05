const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(arrayPacientes, paciente) {
    arrayPacientes.push(paciente);
    console.log(arrayPacientes.join(", "));
}

function atenderPaciente(arrayPacientes) {
    arrayPacientes.shift();
    console.log(arrayPacientes.join(", "));
}

function cancelarAtendimento(arrayPacientes, paciente) {
    let pacientePadrao = paciente[0].toUpperCase() + paciente.slice(1).toLowerCase();
    let indexPaciente = arrayPacientes.indexOf(pacientePadrao);

    if (indexPaciente === -1) {
        console.log("Este paciente não consta na lista de agendamento");
    } else {
        arrayPacientes.splice(indexPaciente, 1);
        console.log(arrayPacientes.join(", "));
    }

}

agendarPaciente(pacientes, "Fabio");
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, 'Gui');