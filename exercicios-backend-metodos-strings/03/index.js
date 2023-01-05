const texto = "   Aprenda programar do zero na CUBOS AcaDemy    ";

const urlAmigavel = texto.trim().toLocaleLowerCase().replaceAll(" ", "-");

console.log(urlAmigavel);