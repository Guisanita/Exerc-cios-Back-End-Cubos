const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


function corrigirProva(prova) {
    let notaAluno = 0;
    let quantidadeAcertos = 0;
    for (let item of prova.questoes) {
        if (item.resposta == item.correta) {
            quantidadeAcertos++
            notaAluno = notaAluno + 2;
        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${quantidadeAcertos} questões, portanto obteve a nota ${notaAluno}.`);

}

corrigirProva(prova);
