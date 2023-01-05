const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', "EU", "Teste", "Eita", "VamoDescobrir"];
const tamanhoDoGrupo = 4;

function separarArrayEmGrupos(array, tamanho) {
    let tamanhoGrupo = tamanho;
    let grupo = 0;

    for (let i = 0; i < array.length; i += tamanho) {

        let arrayGrupo = array.slice(i, tamanhoGrupo).join(", ");
        tamanhoGrupo += tamanho;
        grupo += 1;

        console.log(`Grupo ${grupo}: ${arrayGrupo}\n`);

    }

    // const grupo1 = array.slice(0, tamanho);
    // const grupo2 = array.slice(tamanho, tamanho + 4);
    // const grupo3 = array.slice(tamanho + 4, tamanho + 8)

    // console.log(`Grupo 1: ${grupo1}
    // Grupo 2: ${grupo2}
    // Grupo 3: ${grupo3}`);
}

separarArrayEmGrupos(nomes, tamanhoDoGrupo);