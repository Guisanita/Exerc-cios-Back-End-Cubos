let texto = "Cuidado, pois usuarios as vezes      deixam espacos vazios no fim do texto sem querer "

let textoSemEspacoNoFim = texto.trim();

let arrayDeStrings = textoSemEspacoNoFim.split(" ");

let arrayContagemPalavaras = [];

for (let string of arrayDeStrings) {
    if (string !== "") {
        arrayContagemPalavaras.push(string)
    }
}

console.log(arrayContagemPalavaras.length);

console.log(arrayDeStrings);