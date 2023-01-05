const alturaEmCm = 206;

//seu código aqui

if (alturaEmCm >= 180) {
    if (alturaEmCm <= 185) {
        console.log(`Sua altura é ${alturaEmCm}cm, portanto você foi APROVADO na primeira fase do processo seletivo e irá para o teste de LÍBERO.`);
    } else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
        console.log(`Sua altura é ${alturaEmCm}cm, portanto você foi APROVADO na primeira fase do processo seletivo e irá para o teste de PONTEIRO.`);
    } else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
        console.log(`Sua altura é ${alturaEmCm}cm, portanto você foi APROVADO na primeira fase do processo seletivo e irá para o teste de OPOSTO.`);
    } else if (alturaEmCm > 205) {
        console.log(`Sua altura é ${alturaEmCm}cm, portanto você foi APROVADO na primeira fase do processo seletivo e irá para o teste de CENTRAL.`);
    }
} else {
    console.log(`Sua altura é ${alturaEmCm}cm, portanto você foi REPROVADO na primeira fase do processo seletivo. O tamanho mínimo é 180cm`);
}
