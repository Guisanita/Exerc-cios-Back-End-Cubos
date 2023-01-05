const livro = {
    nome: 'O poder do hábito',
    capitulos: [
        {
            nome: "O loop do hábito",
        },
        {
            nome: "O cérebro ansioso",
        },
        {
            nome: "A regra de ouro da mudança de hábito",
        },
        {
            nome: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            nome: "Starbucks e o hábito do sucesso",
        },
        {
            nome: "O poder de uma crise",
        },
        {
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            nome: "A neorologia do livre-arbítrio",
        },
    ]
}

function acrescentarCapitulo(objeto) {
    let arrayObjetos = [];
    let numeroCapitulo = 1;
    for (let objeto2 of objeto.capitulos) {
        objeto2 = {
            numero: numeroCapitulo,
            ...objeto2
        }

        arrayObjetos.push(objeto2);
        numeroCapitulo++;
    }

    console.log(arrayObjetos);
}

acrescentarCapitulo(livro);




