const nota = 8;

if (nota >= 9 && nota <= 10) {
    console.log("O estudando obeteve conceito A");
} else if (nota >= 8 && nota <= 8.9) {
    console.log("O estudando obeteve conceito B");
} else if (nota >= 6 && nota <= 7.9) {
    console.log("O estudando obeteve conceito C");
} else if (nota >= 4 && nota <= 5.9) {
    console.log("O estudando obeteve conceito D");
} else if (nota >= 0 && nota < 4) {
    console.log("O estudando obeteve conceito E");
} else {
    console.log("Nota não equivalente com as normas");
}