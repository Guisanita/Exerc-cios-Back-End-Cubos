const comentario = "Esse  pAnDeMia é muito perigoso!";

let textoMinusculo = comentario.toLocaleLowerCase();
if (textoMinusculo.includes("covid") || textoMinusculo.includes("pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas.")
} else {
    console.log("Comentário autorizado.");
}

